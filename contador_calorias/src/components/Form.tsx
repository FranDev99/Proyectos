import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialState = {
    category: 1,
    name: '',
    calories: 0
}

export default function Form({dispatch}: FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)
 
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0
    }

    const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'save-activity', payload: {newActivity: activity}})
        setActivity(initialState)
    }

  return (
    <form onSubmit={handelSubmit} className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={activity.category} onChange={handleChange}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input type="text" id="name" value={activity.name} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"/>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input type="number" id="calories" value={activity.calories} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. 300 o 500"/>
        </div>
        <input type="submit" value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'} disabled={!isValidActivity()} className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10" />
    </form>
  )
}
