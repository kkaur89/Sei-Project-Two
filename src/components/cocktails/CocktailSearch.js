import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CocktailCard from './CocktailCard'

const CocktailSearch = ({ cocktailName1 }) => {

  console.log(cocktailName1)

  const params = useParams()
  console.log(params)

  const [cocktailName, setCocktailName] = useState(null)
  const [ingredientName, setIngredientName] = useState(null)

  const [cocktails, setCocktails] = useState([])
  console.log(cocktails, setCocktails)

  const handleChange = event => {
    setCocktailName(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    setCocktails(data.drinks)
  }
  

  const handleChange2 = event => {
    setIngredientName(event.target.value)
  }

  const handleSubmit2 = async event => {
    event.preventDefault()
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
    setCocktails(data.drinks)
  }



  return (
    <>
      <section className="section">
        <div className="container">
          <form className="is-inline">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by cocktail..." onChange={handleChange} />
              </div>
              <div className="control">
                <a className="button is-info" onClick={handleSubmit}>
              Search
                </a>
              </div>
            </div>
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by ingredient..." onChange={handleChange2}/>
              </div>
              <div className="control">
                <a className="button is-info" onClick={handleSubmit2}>
              Search
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="columns is-multiline">
        { cocktails.map(cocktail => (
          <CocktailCard key={cocktail.idDrink} {...cocktail}
          />
        ))}
      </div>  

      <nav className="pagination" role="navigation" aria-label="pagination">
        <a className="pagination-previous" title="This is the first page" disabled>Previous</a>
        <a className="pagination-next">Next page</a>
        <ul className="pagination-list">
          <li>
            <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 2">2</a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 3">3</a>
          </li>
        </ul>
      </nav>
    </>
  )




}
export default CocktailSearch