import Head from 'next/head'
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta assumenda consequuntur, quia neque cupiditate quod voluptatibus aspernatur dolores repudiandae dignissimos maxime. Totam, ab nihil quas commodi minus odit magnam.</p>
      <Footer />
    </div>
  )
}
