import Dexie, { EntityTable } from "dexie"

/**
 * id: Auto-incremented unique
 * name: Optional
 * date: Required, timestamp in milliseconds
 * mealType: Required, one of "breakfast", "lunch", "dinner", "snack"
 */
export interface MealLog {
    id: number
    name?: string
    date: number
    mealType: "breakfast" | "lunch" | "dinner" | "snack"
}

export const mealLogDB = new Dexie("MealLogDB") as Dexie & {
    mealLogs: EntityTable<MealLog, "id">
}

mealLogDB.version(1).stores({
    mealLogs: "++id, name, date, mealType",
})

export function addMealLog(mealLog: Omit<MealLog, "id">) {
    return mealLogDB.mealLogs.add(mealLog)
}


/**
 * Retrieve meal logs for a specific date.
 * @param date - The date for which to retrieve meal logs, get data between date and date + 24 hours
 * @return An array of meal logs for the specified date.
 */
export function getMealLogByDate(date: number) {
    return mealLogDB.mealLogs.where("date").between(date, date + 24 * 60 * 60 * 1000).toArray()}