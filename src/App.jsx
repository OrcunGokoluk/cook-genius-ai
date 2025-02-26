
import Header from "./components/Header"
import './App.css'
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [ingredients, setIngredients] = useState([])

    function addIngredients(formData){
      const ingredientData = formData.get("ingredientInput")
      if(ingredientData){
        setIngredients(prev=>[...prev,ingredientData])
      }
    }

  return (
    <>
      <Header/>
      <div className="ingredient-container">

        <form className="ingredient-form" action={addIngredients}>
              <input type="text" name="ingredientInput" />
              <button>Add Ingredient</button>
        </form>

          <ul className="ingredient-list">
                  {
                    ingredients.map(ingredient=><li key={uuidv4}>{ingredient}</li>)
                  }
          </ul>
          
          <button className="get-recipe-button">Get Recipe</button>

      </div>


    </>
  )
}

export default App
