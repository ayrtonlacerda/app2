import { useState, useCallback, useMemo, useEffect } from 'react'
import {
  Container,
  Title,
  Count,
  LabelButton,
  Input,
  Label,
  ContainInput,
  ContainForm,
  ButtonSearch,
  TextButton,
  Search,
} from './styles'
import { Button } from './components'
import { useForm } from "react-hook-form";
import axios from 'axios';
import useFetch from 'use-http'

const App = () => {
  // lidando com formularios
  const { register, handleSubmit, watch, errors } = useForm();


  const {
    loading, error, data: pokemons
  } = useFetch('https://pokeapi.co/api/v2/pokemon', {}, [])

  const {
    get, loading: loadingGet, error: errorGet, data: pokemon
  } = useFetch('https://pokeapi.co/api/v2/pokemon')


  const onSubmit = async form => {
    const response = await get(`/${form.nome}`)
    console.log({ errorGet, pokemon })
  }



  console.log({ nome: watch('nome') })

  const showPokemons = useMemo(
    () => !watch('nome') && !error
    , [error, watch('nome')])

  const showPokemon = useMemo(
    () => !!watch('nome') && !errorGet && pokemon
    , [error, watch('nome'), pokemon])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Search>
          <Label>Nome</Label>
          <Input ref={register} name='nome' />
          <ButtonSearch type='submit'>
            <TextButton>Pesquisar</TextButton>
          </ButtonSearch>
        </Search>

        {error && 'Error!'}
        {loading && 'Loading...'}
        {showPokemon && (
          <ContainForm>
            <Label>{pokemon.name}</Label>
          </ContainForm>
        )}
        {showPokemons && pokemons?.results?.map(pokemon => (
          <ContainForm>
            <Label>{pokemon.name}</Label>
          </ContainForm>
        ))}

      </Container>
    </form>
  );
}

export default App;


/*
const [pokemons, setPokemons] = useState([])

  const requestPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemons(response.data.results)
      console.log('response -> ', response);
    } catch (error) {
      console.log('error ->', error);
    }
  }

  useEffect(() => {
    requestPokemons()
  }, [])
   <Title>Form React</Title>
        <ContainForm>
          <Label>Nome</Label>
          <Input ref={register} name='nome' />
          <Label>Sobrenome</Label>
          <Input ref={register} name='sobrenome' />
        </ContainForm>
        <Button type='submit'>
          <LabelButton>Enviar</LabelButton>
        </Button>
*/