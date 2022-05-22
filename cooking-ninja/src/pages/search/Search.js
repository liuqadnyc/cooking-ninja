// styles
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './Search.css'

export default function Search() {

  const paramsString = useLocation().search;
  const searchParams = new URLSearchParams(paramsString);
  const query = searchParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;

  const { data, error, isPending } = useFetch(url);


  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {!isPending && data && <RecipeList recipes={data} />}
    </div>
  )
}
