import React, { useState } from 'react'
import { useCars } from '../hooks/useCars'
import { Text, Spacer } from 'vcc-ui'
import { CarCard } from './CarCard'

import styles from '../../public/css/home.module.css'

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <div className={styles.cardsWrapper}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
