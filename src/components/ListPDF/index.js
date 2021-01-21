import React from 'react'
import * as S from '../Post/styled'

const PDFGenerator = ({listPdf}) => {
    return (
        <S.PostBadge>
            {
            listPdf && listPdf.length > 0 && 
                <div>
                    Baixar PDF:  &nbsp;  
                    {listPdf.map((pdf, i) => 
                        <S.PostBadgetLink 
                            key={i} 
                            to={pdf.url}
                        >
                            {pdf.alt}
                        </S.PostBadgetLink>
                    )}
                </div>
            }
        </S.PostBadge>
    
    )
}

export default PDFGenerator
