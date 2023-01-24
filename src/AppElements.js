import styled from "styled-components"

export const Container = styled.div`
    position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    background: #F7EFE5;
`

export const PortfolioMainImage = styled.img`
    position: fixed;
    width: 10rem;
    right: 17%;
    top: 13%;

    @media screen and (max-width: 768px){
        display: none;
    } 
`