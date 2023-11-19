import { CardContent, Card, Spacer, Text, Flex, Row, Link } from 'vcc-ui'
import { Car } from '../types/car.interface'
import Image from 'next/image'
import styles from '../../public/css/carCard.module.css'

interface CardProps {
  car: Car
}

export function CarCard({ car }: CardProps) {
  return (
    <div className={styles.card_wrapper}>
      <Text variant="bates" subStyle="emphasis">
        {car?.bodyType}
      </Text>
      <Flex
        extend={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0,
        }}>
        <Text variant="amundsen" extend={{ margin: 0 }}>
          {car?.modelName}
        </Text>
        <Text variant="bates" subStyle="inline-link">
          {car?.modelType}
        </Text>
      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width="200" height="150" />
      <Spacer />

      <Flex
        extend={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Link href="volvocard.com" arrow="right">
          Shop
        </Link>
        <Link href="volvocard.com" arrow="right">
          Learn
        </Link>
      </Flex>
    </div>
  )
}
