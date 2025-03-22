import { StateCreator } from "zustand"
import { Categories, Meal, Meals, Recipe, SearchFilter } from "../types"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"

export type RecipesSliceType = {
    categories: Categories
    meals: Meals
    selectedRecipe: Recipe
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) => Promise<void>
    selectRecipe: (id: Meal['idMeal']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        meals: []
    },
    meals: {
        meals: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({categories})
    },
    searchRecipes: async (filters) => {
        const meals = await getRecipes(filters)
        set({meals})
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({selectedRecipe, modal: true})
    },
    closeModal: () => {
        set({modal: false, selectedRecipe: {} as Recipe})
    }
})