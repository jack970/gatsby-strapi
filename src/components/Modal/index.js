import React from 'react'
import * as S from './styled'

const Modal =props => (
    <S.ModalWrapper>
        <div className="modal">
            <header>{props.title}</header>
            <section>Teste</section>
            <section>TEste</section>
        </div>
    </S.ModalWrapper>
)

export default Modal