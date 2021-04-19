import {motion} from 'framer-motion';
import Navbar from '../components/navbar/index';
import CardVIew from '../components/cards/index';

export default function Home() {
  return (
    <>
    <Navbar/>
    <motion.div
     style={{
      height: '80vh',
      backgroundColor:'purple'
    }}
    initial={{
     scaleY: 0,
     backgroundColor:'blanchedalmond'
    }}

    animate={{
      scaleY: 1
    }}

    exit={{
      scaleY: 0
    }}

    transition={{
      duration: .5
    }}

    >
      <h1>Home Page</h1>
      <CardVIew/>
      
    </motion.div>
    </>
  )
}
