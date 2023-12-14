import { useDispatch } from 'react-redux'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import  StarButton  from './StarButton'
import { setFavorite } from '../slices/dataSlice'
import './PokemonCard.css'
import './PokemonList.css' 


const PokemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch()
    const typeString = types.map((item) => item.type.name).join(', ')

    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }
    return (
        <Card
            className='card'
            title={name}
            cover={<img src={image} alt={name} style={{ margin: 2 }}/>}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}>
            <Meta description={typeString} className='card-type'/>
        </Card>
    )
}
export default PokemonCard