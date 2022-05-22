import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
  form {
    display: flex;
    align-items: center;
  }
  input {
    margin-left: 10px;
  }
`

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/search?q=${term}`)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </Container>
  )
}
