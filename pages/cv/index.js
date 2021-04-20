import { motion } from 'framer-motion';
import Navbar from '../../components/navbar/index';
import SectionProfil from '../../components/sectionprofil/index';

export default function Cv(){
    return(
        <>
        <Navbar/>
           <div style={{display:'flex'}}>
               <SectionProfil/>
               <motion.div
                style={{
                    backgroundColor:'green',
                    height: '90vh',
                    width:'70%'
                    
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

           </div>
        </>
    )
}