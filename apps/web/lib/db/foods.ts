import Dexie, { EntityTable } from "dexie"

export interface Food {
  id: number
  name: string
  protein: number
  fat: number
  carbs: number
}

export const foodDB = new Dexie("Foods") as Dexie & {
  foods: EntityTable<Food, "id">
}

foodDB.version(1).stores({
  foods: "++id, name, protein, fat, carbs",
})
