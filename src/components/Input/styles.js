import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color:transparent;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;

    input {
        width: 90%;
        height: 75px;
        border: 0;
        position:relative;
        top: 1rem;
        right: 3rem; 
        display: flex;
        border-bottom: 3px solid black;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family:"Arial";
        color:#06283D ;
        border-radius: 10px 10px 0 0 
    }

    @media (max-width: 768px) {
       input{
        position:relative;
        left:0.1px;
        width: 100%;
        top: 2rem;
       }
    }
}
`