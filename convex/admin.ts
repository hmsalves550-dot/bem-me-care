import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

const ADMIN_PASSWORD = "bemmecare2024";

// Simple password authentication
export const authenticateAdmin = mutation({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    if (args.password === ADMIN_PASSWORD) {
      return { success: true, message: "Autenticado com sucesso" };
    }
    return { success: false, message: "Password incorreta" };
  },
});

// Check if user has admin access (for client-side checks)
export const checkAdminAccess = query({
  args: { password: v.string() },
  handler: async (ctx, args) => {
    return args.password === ADMIN_PASSWORD;
  },
});
