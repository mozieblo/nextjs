import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello next.js world!</h1>
      <Link href="/about">About</Link>
    </div>
  )
}