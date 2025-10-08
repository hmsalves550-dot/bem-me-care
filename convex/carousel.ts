import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// Get all active carousel slides
export const getActiveSlides = query({
  args: {},
  handler: async (ctx) => {
    const slides = await ctx.db
      .query("carouselSlides")
      .withIndex("by_order")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
    
    return Promise.all(
      slides.map(async (slide) => ({
        ...slide,
        imageUrl: slide.imageId ? await ctx.storage.getUrl(slide.imageId) : null,
      }))
    );
  },
});

// Get all slides for admin (including inactive)
export const getAllSlides = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const slides = await ctx.db
      .query("carouselSlides")
      .withIndex("by_order")
      .collect();
    
    return Promise.all(
      slides.map(async (slide) => ({
        ...slide,
        imageUrl: slide.imageId ? await ctx.storage.getUrl(slide.imageId) : null,
      }))
    );
  },
});

// Create new slide
export const createSlide = mutation({
  args: {
    title: v.string(),
    subtitle: v.optional(v.string()),
    description: v.string(),
    ctaText: v.string(),
    ctaLink: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    backgroundColor: v.string(),
    textColor: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // Get the highest order number and add 1
    const slides = await ctx.db.query("carouselSlides").collect();
    const maxOrder = Math.max(...slides.map(s => s.order), 0);

    return await ctx.db.insert("carouselSlides", {
      ...args,
      order: maxOrder + 1,
      isActive: true,
    });
  },
});

// Update slide
export const updateSlide = mutation({
  args: {
    id: v.id("carouselSlides"),
    title: v.string(),
    subtitle: v.optional(v.string()),
    description: v.string(),
    ctaText: v.string(),
    ctaLink: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    backgroundColor: v.string(),
    textColor: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

// Delete slide
export const deleteSlide = mutation({
  args: { id: v.id("carouselSlides") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    return await ctx.db.delete(args.id);
  },
});

// Reorder slides
export const reorderSlides = mutation({
  args: { slideIds: v.array(v.id("carouselSlides")) },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    for (let i = 0; i < args.slideIds.length; i++) {
      await ctx.db.patch(args.slideIds[i], { order: i + 1 });
    }
  },
});

// Toggle slide active status
export const toggleSlideActive = mutation({
  args: { id: v.id("carouselSlides") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const slide = await ctx.db.get(args.id);
    if (!slide) {
      throw new Error("Slide not found");
    }

    return await ctx.db.patch(args.id, { isActive: !slide.isActive });
  },
});

// Generate upload URL for images
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    return await ctx.storage.generateUploadUrl();
  },
});
