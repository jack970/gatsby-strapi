import React from 'react'
import propTypes from 'prop-types'
import * as S from './styled'

const PostItemNotices = ({ slug, title, date, description, fluid}) => (
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemImage fluid={fluid} />
            <S.PostItemInfo>
                <S.PostItemDate>{date}</S.PostItemDate>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>

)

PostItemNotices.proTypes = {
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default PostItemNotices