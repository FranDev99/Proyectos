import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })

    const [error, setError] = useState("");

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!searchFilters.ingredient.trim() || !searchFilters.category.trim()) {
            setError("Please enter an ingredient or select a category.")
            return
        }
        setError("")
        searchRecipes(searchFilters)
    }

    return (
        <header className="h-screen flex flex-col md:grid md:grid-cols-5 md:grid-rows-5 gap-4">
            <div className="md:col-span-3 md:row-span-5 h-1/2 md:h-full">
                <img src="/img_header.jpg" alt="Imagen de diversos alimentos" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="md:col-span-2 md:row-span-5 md:col-start-4 h-1/2 md:h-full flex flex-col items-center justify-center gap-6 sm:gap-10 p-4">
                <p className="text-center text-3xl sm:text-4xl md:text-6xl font-[Fredoka] text-emerald-800">
                    ¡Find Your Recipes!
                </p>
                <div className="bg-amber-50 border bg-opacity-90 p-6 md:p-8 rounded-xl shadow-xl w-full max-w-md">
                    <form className="flex flex-col items-center gap-6 md:gap-8" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <label htmlFor="ingredient" className="block text-2xl sm:text-3xl md:text-4xl font-[Fredoka] mb-2 md:mb-3">
                                Ingredient
                            </label>
                            <input
                                id="ingredient"
                                name="ingredient"
                                type="text"
                                placeholder="Eg: Tomato"
                                className={`w-full px-4 py-2 md:px-5 md:py-3 text-lg sm:text-xl border bg-white rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 font-mono 
                                ${error && !searchFilters.ingredient ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 focus:ring-blue-500'}`}
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="category" className="block text-2xl sm:text-3xl md:text-4xl font-[Fredoka] mb-2 md:mb-3">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className={`w-full px-4 py-2 md:px-5 md:py-3 text-lg sm:text-xl border bg-white rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 cursor-pointer font-mono 
                                ${error && !searchFilters.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 focus:ring-blue-500'}`}
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">Select a category</option>
                                {categories.meals.map((category) => (
                                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                ))}
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Search Recipes"
                            className="cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white text-xl sm:text-2xl font-[Fredoka] w-full py-2 md:py-3 rounded-xl shadow-md"
                        />
                    </form>
                </div>
            </div>
        </header>
    )
}
