import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './cocktails/CocktailCard'

const Home = () => {

  const [cocktailName1, setCocktailName] = useState(null)
  console.log(cocktailName1)


  const handleChange = event => {
    setCocktailName(event.target.value)
  }


  const [randomCocktail, setRandomCocktail] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail(data.drinks)
    }
    getData()
  }, [])

  const [randomCocktail1, setRandomCocktail1] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail1(data.drinks)
    }
    getData()
  }, [])

  const [randomCocktail2, setRandomCocktail2] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail2(data.drinks)
    }
    getData()
  }, [])













  
  return (
    <>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">
Medium hero
          </p>
          <p className="subtitle">
Medium subtitle
          </p>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <form className="is-inline">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by cocktail..." onChange={handleChange}/>
              </div>
              <div className="control">
                <a className="button is-info">
                  Search
                </a>
              </div>
            </div>
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by ingredient..." />
              </div>
              <div className="control">
                <a className="button is-info">
                  Search
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section is-medium">
        <h1>Popular Cocktails</h1>
        <div className="flex">
          { randomCocktail.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
          { randomCocktail1.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
          { randomCocktail2.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
        </div>
      </section>


      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Tipple your Fancy</strong>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home






// <div className="columns">
// <div className="column">
//   <div className="columns is-mobile">
//     <div className="column">
//       <form className="box column is-half is-offset-one-quarter">
//         <div className="column">
//           <div className="field">
//             <input className="input bd-notification is-info" type="text" placeholder="Search by cocktail" />
//           </div>
//         </div>
//         <div className="column">
//           <div className="field">
//             <button type="submit" className="button is-fullwidth is-warning bd-notification is-info">Search!</button>
//           </div>
//         </div>            
//       </form>
//       <div className="column">
//         <p className="bd-notification is-info">Second nested column</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>