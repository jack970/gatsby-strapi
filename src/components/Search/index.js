import React, { useRef, useState } from 'react'
import * as S from './styled'
import { navigate } from "@reach/router"

function Search({initialQuery=""}) {
    const [query, setQuery] = useState(initialQuery)

    const inputEl = useRef(null)

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const q = inputEl.current.value
        navigate(`/pesquisa?s=${q.trim()}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <S.SearchWrapper>
                <S.Input
                    onChange={handleChange}
                    ref={inputEl}
                    value={query}
                    type="text" 
                    placeholder=""
                    aria-label="Search"
                />
                <S.Span aria-hidden="true">
                    <S.LogoSearch />
                </S.Span>
            </S.SearchWrapper>
        </form>
    )
}

export default Search
