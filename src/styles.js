import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #06283D;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    width: 65%;
    height: 70%;
    border: 4px solid black;
    background: #ffff;
    border-radius: 20px;

        @media (max-width: 768px) {
        height:42.8% ;
        border-radius: 20px 20px 0px 0px;
        border:  5px solid black;

       }
    }
`



export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position:relative;
    top: 3rem;
    left:1rem
    right: 1rem;

    @media (max-width: 768px) {
    position:relative;
    top: 2rem;
    }
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`