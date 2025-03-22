import { useMemo } from "react"
import Header from "./components/Header"
import Recipes from "./components/Recipes"
import { useAppStore } from "./stores/useAppStore"
import Modal from "./components/Modal"

function App() {

  const meals = useAppStore((state) => state.meals)
  const hasMeals = useMemo(() => meals.meals.length, [meals])
  return (
    <>
      <Header/>
      { hasMeals ? (
        <>
          <h1 className="text-6xl font-[Fredoka] text-center text-emerald-800 my-10">Available Recipes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-10 gap-10">{meals.meals.map((meal) => (<Recipes key={meal.idMeal} meal={meal}/>))}</div> 
          <Modal/>
        </>
      ) : <></>}
    </>
  )
}

export default App
