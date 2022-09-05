import styles from './Header.module.css'

import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocketLogo} alt="logotipo rocket" />
    </div>
  )
}
