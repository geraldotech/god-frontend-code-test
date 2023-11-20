import React, { useState } from 'react'
import { useCars } from '../hooks/useCars'
import { Text } from 'vcc-ui'
import { CarCard } from './CarCard'
import { Spacer } from './Spacer'
import styles from '../../public/css/home.module.css'
import PaginationDesktop from './PaginationDesktop'

export const HomeComponent: React.FC = () => {
  const { cars } = useCars()

  const onClickNavigate = (left: boolean) => {
    let cardList = document.getElementById('card-list')
    let card = cardList?.firstElementChild
    let cardSize = (card?.clientWidth ?? 0) + 24
    let scrollSize = cardList?.scrollWidth ?? 0
    let scrollPosition = cardList?.scrollLeft ?? 0
    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize })
    else {
      cardList?.scrollTo({ left: scrollPosition + cardSize })
    }
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)}
      />
    </div>
  )
}
