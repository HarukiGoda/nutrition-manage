import Dexie, { EntityTable } from "dexie"

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
