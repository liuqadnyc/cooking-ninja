import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

// styles
import { ThemeSelector } from './components/ThemeSelector'
import { useEnhancedContext } from './hooks/useEnhancedContext'
import { ThemeContext } from './context/ThemeContext'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100%;
  background: ${({ theme }) => (theme === 'dark' ? '#333': 'unset')};
`

function App() {
  const { mode } = useEnhancedContext(ThemeContext)

  return (
    <Container theme={mode}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App
