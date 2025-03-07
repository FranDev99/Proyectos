import {z} from 'zod'
import { categoriesAPIResponseSchema, SearchFilterSchema } from '../schemas/recipes-schema'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>