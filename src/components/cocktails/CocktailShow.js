import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' 

const CocktailShow = () => {

  const params = useParams()

  const [cocktail, setEachCocktail] = useState([])
  console.log(cocktail)

  useEffect(() => {

    const getData = async () => {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      console.log(data.drinks[0])
      setEachCocktail(data.drinks[0])
    }
    getData()
  }, [])
  
  const { strDrink, strDrinkThumb, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 } = cocktail


  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="title has-text-centered">{ strDrink }</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={strDrinkThumb} alt={`${strDrink} drink`} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Category</h4>
              <p>{strCategory}</p>
              <hr />
              <h4 className="title is-4">Method</h4>
              <hr />
              <p>{strInstructions}</p>
              <hr />
              <table className="table is-striped table is-fullwidth">
                <thead>
                  <tr>
                    <th><abbr>Ingredients</abbr></th>
                    <th><abbr>Measure</abbr></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{ strIngredient1 }</th>
                    <td>{ strMeasure1 }</td>
                  </tr>
                  <tr>
                    <th>{ strIngredient2 }</th>
                    <td>{ strMeasure2 }</td>
                  </tr>
                  <tr>
                    <th>{ strIngredient3 }</th>
                    <td>{ strMeasure3 }</td>
                  </tr>
                  <tr>
                    <th>{ strIngredient4 }</th>
                    <td>{ strMeasure4 }</td>
                  </tr>
                  <tr>
                    <th>{ strIngredient5 }</th>
                    <td>{ strMeasure5 }</td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>






  )
}

export default CocktailShow

{/* <tr>
<td>1</td>
</tr>
<tr>
<td>1</td>
</tr>
<tr>
<td>2</td>
</tr>
<tr>
<td>2</td>
</tr> */}