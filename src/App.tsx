import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Content } from './components/Content'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Content />
      </div>
    </>
  )
}
