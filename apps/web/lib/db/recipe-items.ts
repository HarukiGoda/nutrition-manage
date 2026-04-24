import Dexie, { EntityTable } from "dexie"

/**
 * id: Auto-incremented unique
 * recipeId: Required, references Recipe.id
 * foodId: Required, references Food.id
 * quantity: Required, in grams
 */
export interface RecipeItem {
  id: number
  recipeId: number
  foodId: number
  quantity: number
}

export const recipeItemDB = new Dexie("RecipeItemDB") as Dexie & {
  recipeItems: EntityTable<RecipeItem, "id">
}

recipeItemDB.version(1).stores({
  recipeItems: "++id, recipeId, foodId, quantity",
})

export function addRecipeItem(recipeItem: Omit<RecipeItem, "id">) {
  return recipeItemDB.recipeItems.add(recipeItem)
}

export function getRecipeItemsByRecipeId(recipeId: number) {
  return recipeItemDB.recipeItems.where("recipeId").equals(recipeId).toArray()
}
