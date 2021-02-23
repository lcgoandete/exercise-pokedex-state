import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemons: this.props.pokemons
    }
  }
    
  nextPokemon = () => {
   if (this.state.pokemonIndex < this.state.pokemons.length -1) {
      this.setState((index) => ({
        pokemonIndex: index.pokemonIndex + 1
      }));
    } else {
      this.setState(() => ({
        pokemonIndex: 0
      }));
    }
  }

  fireFilter = () => this.setState(() => ({
      pokemons: pokemons.filter((pokemon) => pokemon.type === 'Fire'),
      pokemonIndex: 0
    }));
  
  psychicFilter = () => this.setState(() => ({
      pokemons: pokemons.filter((pokemon) => pokemon.type === 'Psychic'),
      pokemonIndex: 0
    }));

  noFilter = () => this.setState(() => ({
    pokemons: this.props.pokemons,
    pokemonIndex: 0
  }));
  
  render() {
    return (
      <div className="pokedex">
        <div>
          <button onClick={ this.noFilter }>All</button>
          <button onClick={ this.nextPokemon }>Próximo</button>
          <button onClick={ this.fireFilter }>Fire</button>
          <button onClick={ this.psychicFilter }>Psychic</button>
          </div>
        <Pokemon pokemon={ this.state.pokemons[this.state.pokemonIndex] } />
      </div> 
    );
  }
}

export default Pokedex;