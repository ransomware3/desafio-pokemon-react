import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { useContext } from "react"
import { ThemeeContext } from "../../contexts/theme-context"
import {
    Btn
} from './styled'

const BtnTopBot = () => {
    const { theme } = useContext(ThemeeContext)
    
    return(
        <>
            <Btn style={{ backgroundColor: theme.background2, color: theme.color1, bottom: 120 }} href="#top"><IoIosArrowUp/></Btn>
            <Btn style={{ backgroundColor: theme.background2, color: theme.color1, bottom: 30 }} href="#more"><IoIosArrowDown/></Btn>
        </>
    )
}

export { BtnTopBot }