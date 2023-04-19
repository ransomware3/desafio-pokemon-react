import { render, screen } from "@testing-library/react"
import { CardsPokemon } from "../../components/pokemon-cards"

describe("CardsPokemon", () => {
    it('teste cards pokemon', () => {
        render(<CardsPokemon/>)

        expect(screen.getByText("type")).toBeInTheDocument()
    })
})