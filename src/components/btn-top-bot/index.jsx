import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import {
    Btn
} from './styled'

export const BtnTopBot = () => (
    <>
        <Btn style={{ bottom: 120 }} href="#top"><IoIosArrowUp /></Btn>
        <Btn style={{ bottom: 30 }} href="#more"><IoIosArrowDown /></Btn>
    </>
)