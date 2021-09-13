import React, { createContext } from "react";
import Home from "./pages/Home";
import { Header } from "./pages/Header";
import { TeamPokemon } from "./pages/TeamPokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokemonDetails } from "./pages/PokemonDetails";

export const UserContext = createContext();

/**
* @author Owolabi Oluwatosin Daniel
* @function App
**/
const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/pokemon-details" exact>
        <PokemonDetails />
      </Route>
      <Route path="/team-pokemon">
        <TeamPokemon />
      </Route>
    </Switch>
  )
}

export const App = (props) => {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )

}
