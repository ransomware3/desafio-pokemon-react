import { useContext } from 'react'
import { ThemeeContext } from '../../contexts/theme-context'
import {
    FooterTag
} from './styled'

const Footer = () => {

    const { theme } = useContext(ThemeeContext)

    return(
        <>
            <FooterTag style={{ backgroundColor: theme.background4 }}>
                <p style={{ color: theme.color1 }}>
                    &copy;&nbsp;Coded by <a rel="noopener noreferrer" target='_blank' style={{ color: theme.color1, fontWeight: 'bold' }} href='https://github.com/ransomware3'>Natan Iori</a>
                </p>
            </FooterTag>
        </>
    )
}

export { Footer }