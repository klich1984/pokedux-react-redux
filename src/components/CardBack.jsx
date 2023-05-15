import React, { useRef } from 'react'

const CardBack = ({ abilities, stats, id, experience }) => {
  const cardBeforeRef = useRef(null)

  const handleClikBefore = () => {
    cardBeforeRef.current.parentElement.parentElement.classList.remove(
      'pokemonList__card--father--click'
    )
  }

  return (
    <>
      <div ref={cardBeforeRef} className='card__back--body-card'>
        <div className='card__back--button'>
          <button onClick={handleClikBefore} className='pulso'>
            <img src='assets/back.png' alt='row' />
          </button>
        </div>
        <div className='card__back--stats'>
          <h3>Stats</h3>
          <div className='stats--items'>
            <div className='stats--image'>
              <img src={`assets/exp.png`} alt='experience' />
            </div>
            <div className='stats--progress'>
              <label htmlFor='experience'>
                <span>xp:</span> <span>{experience}</span>
              </label>

              <div
                className='stats--progress-bar'
                style={{ '--width-progress': experience }}
              >
                <progress id='123' max='110' value='85'></progress>
              </div>
            </div>
          </div>
          {stats?.map((stat, index) => (
            <div className='stats--items' key={`stats-${id}-${index}`}>
              <div className='stats--image'>
                <img src={`assets/${stat?.stat?.name}.png`} alt='' />
              </div>
              <div className='stats--progress'>
                <label htmlFor={stat?.stat?.name}>
                  <span>{stat?.stat?.name}:</span> <span>{stat?.base_stat}</span>
                </label>

                <div
                  className='stats--progress-bar'
                  style={{ '--width-progress': stat?.base_stat }}
                >
                  <progress
                    id={stat?.stat?.name}
                    max='110'
                    value={stat?.base_stat}
                  ></progress>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='card__back--abilities'>
          <h3>Abilities</h3>
          <div className='abilities--items'>
            {abilities?.map((ability, index) => (
              <span key={`ability-${id}-${index}`}>{ability?.ability?.name}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardBack
