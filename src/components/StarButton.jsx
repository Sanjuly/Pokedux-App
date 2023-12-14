import { Button } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import './StarButton.css'

const StarButton = ({ isFavorite, onClick }) => {
   const Icon = isFavorite ? StarFilled : StarOutlined
   return <Button icon={<Icon />} onClick={onClick} className='button'/>
}
export default StarButton