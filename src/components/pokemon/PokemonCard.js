import React, { Component } from 'react'


import styled from 'styled-components';

import spinner from '../../assets/spinner.gif';
const Sprite = styled.img`
    width: 5em;
    height: 5em;
`;
export default class PokemonCard extends Component {

    state ={
        name:'',
        imageUrl:'',
        pokemonIndex:'',
        imageLoading: true,
        toManyRequests: false,
    };

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name,
            pokemonIndex,
            imageUrl
        });
    }

    render() {



        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                        <h5 className="card-header">{this.state.pokemonIndex}</h5>
                        { this.state.imageLoading ? (
                            <img src={spinner} style={{width: '5em', height: '5em'}} className="card-img-top rounded mx-auto d-block mt-2" alt=""/>
                        ) : null}
                        <Sprite
                            className="card-img-top rounded mx-auto mt-2"
                            src={this.state.imageUrl}
                            onLoad={() => this.setState({imageLoading: false})}
                            onError={() => this.setState({toManyRequests: true})}
                            style = {
                                this.state.toManyRequests ? {display: "none"} :
                                this.state.imageLoading ? null : {display: "block"}
                            }>
                        </Sprite>
                        { this.state.toManyRequests ? (
                            <h6 className="mx-auto">
                                <span className="badge badge-danger mt-2">Muitas Requisições</span>
                            </h6>
                        ) : null}
                        <div className="card-body mx-auto" >
                            <h6 className="card-title" >
                                {this.state.name
                                .toLowerCase()
                                .split(' ')
                                .map(
                                    letra => letra.charAt(0).toUpperCase() + letra.substring(1)
                                )
                                .join(' ')}
                            </h6>
                        </div>
                </div>
            </div>
        )
    }
}
