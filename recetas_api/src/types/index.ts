import { z } from "zod"
import { categoriesApiResponseSchema, MealApiResponse, MealsApiResponse, RecipeApiResponseSchema, SearchFilterSchema } from "../schemas/recipes-schemas"

export type Categories = z.infer<typeof categoriesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Meals = z.infer<typeof MealsApiResponse>
export type Meal = z.infer<typeof MealApiResponse>
export type Recipe = z.infer<typeof RecipeApiResponseSchema>