import axios from "axios"
import { categoriesAPIResponseSchema } from "../schemas/recipes-schema"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const response = categoriesAPIResponseSchema.safeParse(data)
    if(response.success) {
        return response.data
    }
}