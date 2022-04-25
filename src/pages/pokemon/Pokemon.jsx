import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Col, Row } from 'react-bootstrap'
import Card from '../../components/card/Card'
import {
  ContainerPokemon,
  Input,
  ContainerInput,
  Column,
} from './Pokemon.elements'

const Pokemon = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const {
      data: { results },
    } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    const promises = results.map(async (character) => {
      const { data } = await axios.get(character.url)
      return {
        name: character.name,
        ...data,
      }
    })

    const pokemons = await Promise.all(promises)
    console.log(pokemons)
    setData(pokemons)
  }

  const filter = (searchBy) => {
    setSearch(searchBy)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <ContainerPokemon fluid="xs">
      <ContainerInput>
        <Input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => filter(e.target.value)}
        />
      </ContainerInput>
      <Row xs={1} sm={2} md={2} lg={3} xl={4}>
        {data &&
          data.map((pokemonCharacter) => {
            if (
              pokemonCharacter.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <Col xs key={pokemonCharacter.name}>
                  <Card
                    name={pokemonCharacter.name}
                    hp={pokemonCharacter.stats[0].base_stat}
                    img={
                      pokemonCharacter.sprites.other.dream_world.front_default
                    }
                    weight={pokemonCharacter.weight}
                    height={pokemonCharacter.height}
                    type={pokemonCharacter.types[0].type.name}
                  />
                </Col>
              )
            }
          })}
      </Row>
    </ContainerPokemon>
  )
}

export default Pokemon

{
  /* <ContainerInput>
        <Input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => filter(e.target.value)}
        />
      </ContainerInput>
      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={3} xl={4}>
          {data &&
            data.map((pokemonCharacter) => {
              if (
                pokemonCharacter.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return (
                  <Col xs key={pokemonCharacter.name}>
                    <Card
                      name={pokemonCharacter.name}
                      hp={pokemonCharacter.stats[0].base_stat}
                      img={
                        pokemonCharacter.sprites.other.dream_world.front_default
                      }
                      weight={pokemonCharacter.weight}
                      height={pokemonCharacter.height}
                      type={pokemonCharacter.types[0].type.name}
                    />
                  </Col>
                )
              }
            })}
        </Row>
      </Container> */
}
