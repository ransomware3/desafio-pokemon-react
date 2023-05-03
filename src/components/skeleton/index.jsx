import 'react-loading-skeleton/dist/skeleton.css'
import {
    StyledSkeleton,
} from "./styled"

export const SkeletonStyled = () => {
    const array = Array(15).fill(null)
    console.log(array)

    return (
        <>
            { array.map((_, index) => <StyledSkeleton key={index} />) }
        </>
    )
}