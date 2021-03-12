import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './CocktailCard'

const AtoZ = () => {

  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const [cocktails, setCocktails] = useState([])

  const [letter, setLetter] = useState('A')

  useEffect(() => {

    const getData = async () => {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      console.log('data', data.drinks)
      setCocktails(data.drinks)
    }
    getData()
  }, [letter])


  const handleLetter = (event) => {
    setLetter(event.target.innerHTML)
  }



  return (
    <>
      <ul className="alphabet">
        {alpha.map(letter => {
          return (
            <button key={letter} value={letter} onClick={handleLetter} className="bigLetters">
              {letter}
            </button>
          )
        })}
      </ul>
      <div className="columns is-multiline">
        { cocktails.map(cocktail => (
          <CocktailCard key={cocktail.idDrink} {...cocktail}
          />
        ))}
      </div>
    </>

  )
}

export default AtoZ
