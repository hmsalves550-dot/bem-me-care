import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get active logo by type
export const getActiveLogo = query({
  args: { type: v.string() },
  handler: async (ctx, args) => {
    const logo = await ctx.db
      .query("logos")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .filter((q) => q.eq(q.field("isActive"), true))
      .first();
    
    if (!logo) return null;
    
    return {
      ...logo,
      imageUrl: await ctx.storage.getUrl(logo.imageId),
    };
  },
});

// Get all logos for admin
export const getAllLogos = query({
  args: {},
  handler: async (ctx) => {
    const logos = await ctx.db.query("logos").collect();
    
    return Promise.all(
      logos.map(async (logo) => ({
        ...logo,
        imageUrl: await ctx.storage.getUrl(logo.imageId),
      }))
    );
  },
});

// Create new logo
export const createLogo = mutation({
  args: {
    name: v.string(),
    imageId: v.id("_storage"),
    type: v.string(),
  },
  handler: async (ctx, args) => {
    // Deactivate other logos of the same type
    const existingLogos = await ctx.db
      .query("logos")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .collect();
    
    for (const logo of existingLogos) {
      await ctx.db.patch(logo._id, { isActive: false });
    }
    
    return await ctx.db.insert("logos", {
      ...args,
      isActive: true,
    });
  },
});

// Update logo
export const updateLogo = mutation({
  args: {
    id: v.id("logos"),
    name: v.string(),
    imageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

// Delete logo
export const deleteLogo = mutation({
  args: { id: v.id("logos") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

// Set active logo
export const setActiveLogo = mutation({
  args: { id: v.id("logos") },
  handler: async (ctx, args) => {
    const logo = await ctx.db.get(args.id);
    if (!logo) throw new Error("Logo not found");
    
    // Deactivate other logos of the same type
    const existingLogos = await ctx.db
      .query("logos")
      .withIndex("by_type", (q) => q.eq("type", logo.type))
      .collect();
    
    for (const existingLogo of existingLogos) {
      await ctx.db.patch(existingLogo._id, { isActive: false });
    }
    
    // Activate this logo
    return await ctx.db.patch(args.id, { isActive: true });
  },
});

// Generate upload URL for logo images
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});
