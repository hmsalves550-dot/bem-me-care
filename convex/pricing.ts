import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// Get all service pricing
export const getAllPricing = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("servicePricing")
      .withIndex("by_category")
      .collect();
  },
});

// Get pricing for admin
export const getAdminPricing = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    return await ctx.db
      .query("servicePricing")
      .withIndex("by_category")
      .collect();
  },
});

// Create or update service pricing
export const upsertServicePricing = mutation({
  args: {
    serviceId: v.string(),
    serviceName: v.string(),
    category: v.string(),
    basePrice: v.number(),
    unit: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // Check if service already exists
    const existing = await ctx.db
      .query("servicePricing")
      .filter((q) => q.eq(q.field("serviceId"), args.serviceId))
      .first();

    if (existing) {
      return await ctx.db.patch(existing._id, args);
    } else {
      return await ctx.db.insert("servicePricing", args);
    }
  },
});

// Delete service pricing
export const deleteServicePricing = mutation({
  args: { id: v.id("servicePricing") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    return await ctx.db.delete(args.id);
  },
});

// Initialize default pricing data
export const initializeDefaultPricing = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const defaultServices = [
      {
        serviceId: "higiene-pessoal",
        serviceName: "Higiene e Conforto Pessoal",
        category: "Cuidados Pessoais",
        basePrice: 15,
        unit: "hora",
        description: "Cuidados de higiene diários com respeito e dignidade",
        isActive: true,
      },
      {
        serviceId: "seniorsitting",
        serviceName: "Seniorsitting",
        category: "Companhia",
        basePrice: 12,
        unit: "hora",
        description: "Companhia qualificada e atenta às necessidades",
        isActive: true,
      },
      {
        serviceId: "tratamento-roupa",
        serviceName: "Tratamento de Roupa",
        category: "Domésticos",
        basePrice: 10,
        unit: "hora",
        description: "Lavagem, secagem e arranjo de vestuário",
        isActive: true,
      },
      {
        serviceId: "cuidados-alimentares",
        serviceName: "Cuidados Alimentares",
        category: "Alimentação",
        basePrice: 18,
        unit: "hora",
        description: "Preparação de refeições nutritivas e saudáveis",
        isActive: true,
      },
      {
        serviceId: "higiene-habitacao",
        serviceName: "Higiene da Habitação",
        category: "Domésticos",
        basePrice: 12,
        unit: "hora",
        description: "Limpeza e organização do espaço doméstico",
        isActive: true,
      },
      {
        serviceId: "apoio-saude",
        serviceName: "Apoio na Saúde",
        category: "Saúde",
        basePrice: 20,
        unit: "hora",
        description: "Acompanhamento em consultas e medicação",
        isActive: true,
      },
    ];

    for (const service of defaultServices) {
      const existing = await ctx.db
        .query("servicePricing")
        .filter((q) => q.eq(q.field("serviceId"), service.serviceId))
        .first();

      if (!existing) {
        await ctx.db.insert("servicePricing", service);
      }
    }

    return "Default pricing initialized";
  },
});
