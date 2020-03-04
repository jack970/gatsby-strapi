import styled from 'styled-components'
import media from 'styled-media-query'

export const InnerHeaderWrapper = styled.aside`
    display: flex;
    background: var(--MenuInner);
    top: 1.6rem;
    width: 100%;
    height: auto;
    flex-direction: row;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    position: fixed;
    z-index: 1;

    #mobile {
        display: none;
    }

    ${media.lessThan("large")`
        display: block;
        top: 0;
        text-align: center;
    `}
`

export const LogoContainer = styled.div`
    padding: 1rem 7rem 0;
    max-width: 25%;

    ${media.lessThan("large")`
        width: 100%;
        max-width: none;
        display: inline-flex;
        justify-content: space-between;
        padding: 2rem 0 2rem;
        #mobile {
            display: block;
        }
    `}
`
export const MenuContainer = styled.div`
    padding:3.6rem 3.3rem 0;
    width: 100%;

    ${media.lessThan("large")`
        padding: 0;
        display: none;
    `}
`