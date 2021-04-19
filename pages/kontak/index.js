import Navbar from "../../components/navbar";
import {motion} from 'framer-motion';


export default function Kontak(){
    return(
        <>
        <Navbar/>
        <motion.div
        style={{
            height: '80vh'
        }}

        initial={{
        scaleY: 0,
        backgroundColor:'blue'
        }}

        animate={{
        scaleY: 1,
        }}

        exit={{
        scaleY: 0
        }}

        transition={{
        duration: .8
        }}

        >
        <h1>Kontak Page</h1>
        
        </motion.div>
        </>
    )
}