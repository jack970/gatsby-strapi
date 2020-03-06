import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const ContactBox = styled.div`
    padding: 20px 15px 10px;
    border-bottom: 1px solid #aaa;
    position: relative;
    margin: 0 auto;
    text-shadow: 2px 1px 7px black;
    width: 20rem;

    ${media.lessThan('large')`
        border: none;
`}
`

export const InnerWrapper = styled.div`
    background: #222;
    font-size: 14px;
    position: relative;

    ${ContactBox}:first-child {
        border: none;
    }
`
export const Container = styled.div`
    max-width: 100rem;
    margin: 0 auto;
    `

export const Row = styled.div`
    display: flex;
    padding: 2rem;

    ${media.lessThan("large")`
        display: block;
    `}
`
export const HeaderColumns = styled.h1`
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    margin-bottom: 25px;
    font-weight: 700;
`

export const Description = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    padding-top: 5px;
`

export const ContainerIcon = styled.div`
    height: 28px;
    width: 28px;
    padding-right: 20px;
`

export const ContainerContatos = styled.div`
    color: #fff;
    display:flex;
    margin-top: 20px;
`

export const ContainerUl = styled.ul`
    padding-bottom: 2rem;
`

export const ContainerList = styled.li`    
    float: left;
    width: 50%;
    padding-bottom: 1rem;
`

export const ContainerLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    transition: color ease .5s; 

`
