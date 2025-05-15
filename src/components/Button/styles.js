import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding:20px;
    border: 3px solid black;
    background-color: transparent;
    color:#06283D;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: 0.3s;
    
        @media (max-width: 768px) {
         border: 1.9px solid black;
       }
    
    &:hover {
        color:#fff;
        background: #06283D;
    }
`

export const ReverseButtonContainer = styled.button`
    color:#fff;
    background: #06283D;
    padding:20px;
    border: 3px solid black;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: 0.3s;

    @media (max-width: 768px) {
        border: 1.9px solid black;
    }

        &:hover {
        color: #06283D;
        background: #fff;
    }

`