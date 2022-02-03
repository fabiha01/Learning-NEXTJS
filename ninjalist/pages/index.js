import Head from 'next/head'
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
