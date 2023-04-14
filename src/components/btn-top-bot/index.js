import { useState } from "react"
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import {
    Btn
} from './styled'

const BtnTopBot = () => {
    const [isVisible, setIsVisible] = useState(false)

    const showBtn = () => {
        const scrollPosition = window.pageYOffset

        if(scrollPosition > 0){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    
    window.addEventListener('scroll', () => showBtn())
    
    return(
        <>
            {isVisible && <Btn href="#top"><IoIosArrowUp/></Btn>}
            {isVisible === false && <Btn href="#more"><IoIosArrowDown/></Btn>}
        </>
    )
}

export { BtnTopBot }