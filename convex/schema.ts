import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  carouselSlides: defineTable({
    title: v.string(),
    subtitle: v.optional(v.string()),
    description: v.string(),
    ctaText: v.string(),
    ctaLink: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    backgroundColor: v.string(),
    textColor: v.string(),
    order: v.number(),
    isActive: v.boolean(),
  }).index("by_order", ["order"]),

  servicePricing: defineTable({
    serviceId: v.string(),
    serviceName: v.string(),
    category: v.string(),
    basePrice: v.number(),
    unit: v.string(), // "hora", "dia", "mensal", etc.
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_category", ["category"]),

  adminSettings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),

  logos: defineTable({
    name: v.string(),
    imageId: v.id("_storage"),
    isActive: v.boolean(),
    type: v.string(), // "header", "footer", "main"
  }).index("by_type", ["type"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
