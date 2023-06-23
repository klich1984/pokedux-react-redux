import { Button, Carousel, Col, Image, Row, notification } from 'antd'
import { useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'
import { DeleteFilled, DeleteTwoTone } from '@ant-design/icons'

const contentStyle = {
  margin: 0,
  height: '192px',
  color: '#fff',
  textAlign: 'center',
  background:
    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(123,152,180,1) 50%, rgba(0,0,0,1) 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const Slider = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.data, shallowEqual)
  const [disabled, setDisabled] = useState({
    next: true,
    prev: true,
  })
  const [api, contextHolder] = notification.useNotification()

  const refCarousel = useRef(null)

  const favoritesPokemons = state.listPokemonsFavorites

  const onChange = (currentSlide) => {
    if (currentSlide === 0) {
      setDisabled({
        prev: true,
        next: false,
      })
    } else if (currentSlide === favoritesPokemons.length - 1) {
      setDisabled({
        prev: false,
        next: true,
      })
    } else {
      setDisabled({
        prev: false,
        next: false,
      })
    }
  }

  const handleNext = () => {
    if (refCarousel) refCarousel.current.next()
  }

  const handleBack = () => {
    refCarousel.current.prev()
  }

  const openNotificationWithIcon = (type, name) => {
    const isAdd = type === 'success' ? 'added to' : 'removed from'

    api[type]({
      message: `The Pokemon`,
      description: `${name} is ${isAdd} favorites`,
    })
  }

  const handleFavorite = (favorite) => {
    dispatch(setFavorite({ pokemonId: favorite.id }))

    if (!favorite) {
      openNotificationWithIcon('success', favorite.name)
    } else {
      openNotificationWithIcon('error', favorite.name)
    }
  }

  return (
    <>
      {contextHolder}
      {favoritesPokemons.length > 0 && (
        <div className='carousel__container'>
          <Carousel
            className='carousel__container'
            afterChange={onChange}
            dots={false}
            ref={refCarousel}
          >
            {favoritesPokemons.map((favorite) => (
              <div key={`favorite-${favorite.id}`}>
                <div>
                  <div style={contentStyle}>
                    <Row className='carousel__container--content'>
                      <Col className='carousel__container--content-col'>
                        <Row className='carousel__container--header'>
                          <Col className='ant-card-extra'>
                            <DeleteTwoTone
                              twoToneColor='#f4e811'
                              style={{ fontSize: '30px', fill: 'transparent' }}
                              className='carousel__icon--delete'
                              onClick={() => handleFavorite(favorite)}
                            />
                          </Col>
                        </Row>
                        <Row className='carousel__container--content'>
                          <Col className='carousel__container--img'>
                            <Image
                              className='carousel__img'
                              width={100}
                              src={favorite?.sprites?.other?.dream_world?.front_default}
                            />
                          </Col>
                          <Col className='carousel__container--description'>
                            <h3>{favorite?.name}</h3>
                            <label htmlFor={favorite?.weight}>
                              <span>Weight:</span> <span>{favorite?.weight}</span>
                            </label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          {favoritesPokemons.length > 1 && (
            <div className='carousel__container--buttons'>
              <Button
                className='carousel__button--back'
                onClick={handleBack}
                disabled={disabled.prev}
              >
                Back
              </Button>
              <Button
                className='carousel__button--next'
                onClick={handleNext}
                disabled={disabled.next}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Slider
