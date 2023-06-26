import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'

const useFavorite = () => {
  const dispatch = useDispatch()

  const openNotificationWithIcon = (type, name) => {
    const isAdd = type === 'success' ? 'added to' : 'removed from'

    return {
      type,
      content: {
        message: `The Pokemon`,
        description: `${name} is ${isAdd} favorites`,
      },
    }
  }

  const handleFavorite = (favorite, id, name) => {
    let msgNotification = ''
    dispatch(setFavorite({ pokemonId: id }))

    if (!favorite) {
      msgNotification = openNotificationWithIcon('success', name)
    } else {
      msgNotification = openNotificationWithIcon('error', name)
    }

    return msgNotification
  }

  return { handleFavorite }
}

export default useFavorite
