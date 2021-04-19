import { motion } from 'framer-motion';
import Navbar from '../../components/navbar/index';

export default function Cv(){
    return(
        <>
        <Navbar/>
            <motion.div
            style={{
                backgroundColor:'green',
                height: '80vh'
            }}
            initial={{
                scaleX: 0,
                rotate:'50deg'
               
            }}
            animate={{
                scaleX: 1,
                rotate:'0deg'
            }}

            exit={{
                scaleX: 0
            }}

            transition={{
                duration: .8,
            }}
            >
                <h1>Cv Page</h1>
            </motion.div>
        </>
    )
}