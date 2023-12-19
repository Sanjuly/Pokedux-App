import { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Search from './components/Search'
import PokemonList from './components/PokemonList'
import logo from './components/statics/logo.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import { selectPokemons } from './slices/dataSlice'
import { selectSearchTerm } from './slices/searchSlice'
import './App.css';

function App() {
  const pokemons = useSelector(selectPokemons, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)
  const searchTerm = useSelector(selectSearchTerm)
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  // Filter the pokemons based on the search term
  const filteredPokemons = pokemons?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='App'>
      <Col span={10} offset={6}>
        <img src={logo} alt='Pokedux' className='app-img'/>
      </Col>
      <Col span={12} offset={6}>
        <Search />
      </Col>
      {loading ? (
        <Col offset={11}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
}

export default App;