import {z} from 'zod'
import { categoriesAPIResponseSchema } from '../schemas/recipes-schema'

export type Categories = z.infer<typeof categoriesAPIResponseSchema>