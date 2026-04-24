import Dexie, { EntityTable } from "dexie"

/**
 * id: Auto-incremented unique
 * janCode: Optional, unique
 * name: Required
 * protein: Required, in grams per 1g
 * fat: Required, in grams per 1g
 * carbs: Required, in grams per 1g
 */
export interface Food {
  id: number
  janCode?: number
  name: string
  protein: number
  fat: number
  carbs: number
}

export const foodDB = new Dexie("Foods") as Dexie & {
  foods: EntityTable<Food, "id">
}

foodDB.version(1).stores({
  foods: "++id, janCode, name, protein, fat, carbs",
})

export function addFood(food: Omit<Food, "id">) {
  return foodDB.foods.add(food)
}