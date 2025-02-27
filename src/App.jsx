
import Header from "./components/Header"
import './App.css'
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import getRecipeFromMistral from "./ai_interface/ai"
import Recipe from "./components/Recipe";

function App() {

    const [ingredients, setIngredients] = useState([])

    function addIngredients(formData){
      const ingredientData = formData.get("ingredientInput")
      if(ingredientData){
        setIngredients(prev=>[...prev,ingredientData])
      }
    }

    const [recipe, setRecipe]= useState("")

    async function getRecipe(data){
    const generate_recipe= await getRecipeFromMistral(data)


      setRecipe(generate_recipe)
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
          
          <button onClick={()=>getRecipe(ingredients)} className="get-recipe-button">Get Recipe</button>

          {recipe ? <Recipe recipe={recipe}/>  : ""}

      </div>


    </>
  )
}

export default App
