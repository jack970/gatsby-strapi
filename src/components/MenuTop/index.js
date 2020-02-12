import React from 'react'
import MenuTopLinks from '../MenuTopLinks'
import * as S from './styled'

const MenuTop = () => (
    <S.MenuTopWrapper>
        <S.MenuTopDescription>
            <MenuTopLinks />
        </S.MenuTopDescription>
    </S.MenuTopWrapper>

)

export default MenuTop