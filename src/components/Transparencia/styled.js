import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const TransparenciaWrapper = styled.section`
    background: rgba(236,236,236,0.2);
    position: relative;
    padding: 3rem 0 3rem;

    ${media.lessThan("large")`
        padding: 3rem 0 8rem;
    `}
   
`

export const TransparenciaContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 70rem;
`  
export const TransparenciaRow = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;`

export const TranspareciadivTitle = styled.div`
    padding: 2rem 0;
    width: 100%;
`

export const TransparenciaTitle = styled.h2`
    color: var(--texto);
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 500;
`
export const TransparenciaLink = styled(Link)`
    padding: 1.2rem 10px;
    text-align: center;
    text-decoration: none;
`

export const TransparenciaItem = styled.span`
    width: 12rem;
    background: var(--white);
    display: block;
    border-radius: 6px;
    padding: 1rem;
    transition: all .25s ease-in-out !important;
    &:hover {
        box-shadow: 5px 10px 10px #888888;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`

export const TransparenciaIconSpan = styled.div`
    color: var(--icone);
    font-size: 50px;
    border: 2px solid var(--icone);
    border-radius: 50%;
    margin: 0 auto;
    padding: 1rem;
    height: 4rem;
    width: 4rem;
    transition: all .25s ease-in-out !important;

    ${TransparenciaItem}:hover & {
        color: var(--white);
        background: var(--amarelo); 
    }
`

export const TransparenciaImageIcon = styled.i`
`

export const TransparenciaTitleItem = styled.h4`
    color: var(--texto);
    font-size: 17px;
    text-transform: uppercase;
    padding: 1rem 0 0.6rem 0;
    min-height: 62px;
    font-weight: 500;
`

export const TransparenciaDescription = styled.p`
    color: #999;
    min-height: 92px;
    font-size: 0.9rem;
`

export const Transparenciabtn = styled.span`
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    color: #007bff;
    border: 1px solid #007bff;
    transition: all 0.4s;

    &:hover {
        color: var(--white);
        background-color: #007bff;
        border-color: #007bff;
    }
`