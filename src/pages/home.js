import { CardsPokemon } from "../components/pokemon-cards"
import { BtnTopBot } from "../components/btn-top-bot"
import { Footer } from "../components/footer"

const Home = () => {
    return(
        <>
            <CardsPokemon/>
            <BtnTopBot/>
            <Footer/>
        </>
    )
}

export { Home }