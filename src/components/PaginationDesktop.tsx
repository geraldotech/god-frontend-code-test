import { IconButton, Flex } from 'vcc-ui'
import styles from '../../public/css/components/paginationDesktop.module.css'

interface PaginationDesktop {
  onClickLeft: () => void
  onClickRight: () => void
}

export default function PaginationDesktop({
  onClickLeft,
  onClickRight,
}: PaginationDesktop) {
  return (
    <div className={styles.btn_wrapper}>
      <IconButton
        variant="outline"
        onClick={onClickLeft}
        aria-label="left"
        iconName="navigation-chevronback"
      />

      <IconButton
        variant="outline"
        onClick={onClickRight}
        aria-label="right"
        iconName="navigation-chevronforward"
      />
    </div>
  )
}
