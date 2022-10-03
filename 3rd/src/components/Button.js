import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
    text-align: center
`

const StyledButton = styled.button `
    outline: none;
    border: none;
    border-radius: 4px;
    font-weight: bold;

    // 색상
    color: white;
    background-color: pink;
    &:hover {
        background-color: black;
        color: pink;
    }

    // 크기
    height: 2.25rem;
    width: 5rem;
`

function Button() {
    return (
        <CenterDiv>
            <StyledButton>
                Button
            </StyledButton>
        </CenterDiv>
    )
}

export default Button
