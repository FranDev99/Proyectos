import { Meal } from "../types"
import { useAppStore } from "../stores/useAppStore"

type MealCardProps = {
    meal: Meal
}

export default function Recipes({meal} : MealCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

  return (
    <div className="shadow-lg rounded-lg bg-amber-50">
        <div className="overflow-hidden rounded-t-lg">
            <img src={meal.strMealThumb} alt={`Imagen de ${meal.strMeal}`} className="hover:scale-115 transition-transform hover:rotate-2"/>
        </div>
        <div className="p-5">
            <h2 className="text-3xl truncate font-[Fredoka]">{meal.strMeal}</h2>
            <button type="button" className="bg-emerald-700 hover:bg-emerald-800 mt-5 w-full p-3 font-[Fredoka] text-white text-lg rounded-xl cursor-pointer" onClick={() => selectRecipe(meal.idMeal)}>See Recipe</button>
        </div>
    </div>
  )
}
