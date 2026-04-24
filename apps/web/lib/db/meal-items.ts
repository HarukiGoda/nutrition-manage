import Dexie, { EntityTable } from "dexie"

/**
 * id: Auto-incremented unique
 * mealId: Required, references MealLog.id
 * recipeId: Required, references Recipe.id
 * quantity: Required, in grams
 */
export interface MealItem {
  id: number
  mealId: number
  recipeId: number
  quantity: number
}

export const mealItemDB = new Dexie("MealItemDB") as Dexie & {
  mealItems: EntityTable<MealItem, "id">
}

mealItemDB.version(1).stores({
  mealItems: "++id, mealId, recipeId, quantity",
})

export function addMealItem(mealItem: Omit<MealItem, "id">) {
  return mealItemDB.mealItems.add(mealItem)
}

export function getMealItemsByMealId(mealId: number) {
  return mealItemDB.mealItems.where("mealId").equals(mealId).toArray()
}