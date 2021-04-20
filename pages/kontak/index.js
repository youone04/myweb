import Navbar from "../../components/navbar";
import {motion} from 'framer-motion';
import SectionProfil from '../../components/sectionprofil/index';

export default function Kontak(){
    return(
        <>
        <Navbar/>
        <div style={{display:'flex'}}>
        <SectionProfil/>
        <motion.div
        style={{
            height: '80vh',
            width: '70%'
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
        </div>
        </>
    )
}