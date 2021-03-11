import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import CocktailSearch from './components/cocktails/CocktailSearch'
import CocktailShow from './components/cocktails/CocktailShow'

function App() {



  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailShow />
        </Route>
        <Route path="/cocktail">
          <CocktailSearch />
        </Route>
      </Switch>
    </BrowserRouter>


  )
}

export default App
