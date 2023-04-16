import { useState } from "react"
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { useContext } from "react"
import { ThemeeContext } from "../../contexts/theme-context"
import {
    Btn
} from './styled'

const BtnTopBot = () => {
    const [isVisible, setIsVisible] = useState(false)

    const { theme } = useContext(ThemeeContext)

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
            {isVisible && <Btn style={{ backgroundColor: theme.background2, color: theme.color1 }} href="#top"><IoIosArrowUp/></Btn>}
            {isVisible === false && <Btn style={{ backgroundColor: theme.background2, color: theme.color1 }} href="#more"><IoIosArrowDown/></Btn>}
        </>
    )
}

export { BtnTopBot }