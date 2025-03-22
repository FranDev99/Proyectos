import axios from "axios"
import { categoriesApiResponseSchema, MealsApiResponse, RecipeApiResponseSchema } from "../schemas/recipes-schemas"
import { Meal, SearchFilter } from "../types"

export async function getCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(url)
    const response = categoriesApiResponseSchema.safeParse(data)
    if(response.success) {
        return response.data
    }
}

export async function getRecipes( filters: SearchFilter ) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    const response = MealsApiResponse.safeParse(data)
    if(response.success) {
        return response.data
    }
}

export async function getRecipeById(id: Meal['idMeal']) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const response = RecipeApiResponseSchema.safeParse(data.meals[0])
    if(response.success) {
        return response.data
    }
}