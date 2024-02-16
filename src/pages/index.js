// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Form1 from './components/queueUpdates'
import Form2 from './qcomps/snapshot'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form1 />
    </div>
  )
}
