import { z } from "zod"

export const categoriesApiResponseSchema = z.object({
    meals: z.array(z.object({
        strCategory: z.string()
   }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const MealApiResponse = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string()
})

export const MealsApiResponse = z.object({
    meals: z.array(MealApiResponse)
})

export const RecipeApiResponseSchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
})