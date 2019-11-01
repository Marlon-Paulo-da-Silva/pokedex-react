import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';


export default class PokemonList extends Component {

    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }


    render() {
        return (
            <div className="row">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        )
    }
}
