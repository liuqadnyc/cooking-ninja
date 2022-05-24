import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { useEnhancedContext } from '../../hooks/useEnhancedContext'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)
  const { mode } = useEnhancedContext(ThemeContext)

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
