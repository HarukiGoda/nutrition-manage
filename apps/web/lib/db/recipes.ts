import Dexie, { EntityTable } from "dexie"

export interface Recipe {
  id: number
  name: string
}

export const recipeDB = new Dexie("RecipeDB") as Dexie & {
  recipes: EntityTable<Recipe, "id">
}

recipeDB.version(1).stores({
  recipes: "++id, name",
})
