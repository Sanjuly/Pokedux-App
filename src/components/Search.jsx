import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Input } from 'antd'
import { setSearchTerm, setInvalidPokemon } from '../slices/searchSlice'
import { selectSearchTerm, selectIsValidPokemon } from '../slices/searchSlice'



const Search = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector(selectSearchTerm)
    const isValidPokemon = useSelector(selectIsValidPokemon)
    const [showInvalidPokemonMessage, setShowInvalidPokemonMessage] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (!isValidPokemon) {
          setShowInvalidPokemonMessage(true);
        } else {
          setShowInvalidPokemonMessage(false);
        }
      }, [isValidPokemon])
    
      const handleSearch = (inputTerm) => {
        const isValid = /^[a-zA-Z0-9-]+$/.test(inputTerm)
    
        if (isValid) {
          dispatch(setSearchTerm(inputTerm))
          setShowInvalidPokemonMessage(false)
        } else {
          dispatch(setInvalidPokemon())
          setShowInvalidPokemonMessage()
        }
      }

      const handleClearSearch = () => {
        dispatch(setSearchTerm(''))
        setShowInvalidPokemonMessage(false)
        inputRef.current && inputRef.current.focus()
      }

    return (
        <div className="poked-search">
            <Input.Search 
                placeholder='Search Pokemons...'
                value={searchTerm}
                style={{ marginBottom: 20 }}
                onChange={(e) => handleSearch(e.target.value)}
                onSearch={handleSearch}
                allowClear={true}
                suffix={searchTerm && <span onClick={handleClearSearch}>Clear</span>}
                ref={inputRef}
            />
        {showInvalidPokemonMessage && (
            <Alert
              description="Please enter a valid Pokémon name."
              type="error"
            />
        )}
        </div>
)}
export default Search;