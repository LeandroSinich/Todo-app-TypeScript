import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [tarea, setTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleClick = ()=>{
        if(tarea.trim() === '')return
        setListaTareas(tareasAnteriores => [...tareasAnteriores,tarea])
        setTarea('')
    }
    const handleBorrarTarea = (index: number)=>{
        setListaTareas(listaTareas.filter((_,i)=> i !== index))
    }

  return (
    <div className="app-container">
        <h1>Lista de Tareas</h1>
        <div>
            <input 
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder="Nueva Tarea"
            />
            <button
            onClick={handleClick}
            >Agregar</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}/>
    </div>
  )
}