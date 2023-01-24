import { SocialIcon } from "react-social-icons"
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

export const InnerStyleContainer = styled.div`
    position:fixed;
    width: 30rem;
    height: 50rem;
    right: 0;
    /* background: gray; */
    background: #C3ACD0;
`

export const InnerStyleContainerSocial = styled.div`
    position: fixed;
    width: 7rem;
    height: 27rem;
    right: 41px;
    background: white;
    top: 15%;

    background: #FFFBF5;
`

export const InnerTitle = styled.h1`
    position: fixed;
    display: inline-block;
    top: 29%;
    left: 10%;
    font-family: cursive, fantasy;
`

export const InfoSectionContainer = styled.div`
    position: absolute;
    top: 34%;
    left: 37%;
    width: 26rem;
    height: 20rem;
    background: white;
`

export const Github = styled(SocialIcon)`
    position:fixed;
    left: 92%;
    top: 30%;
`

export const LinkedIn = styled(SocialIcon)`
    position:fixed;
    left: 88.9%;
    top: 40%;
`

export const Twitter = styled(SocialIcon)`
    position:fixed;
    left: 85.8%;
    top: 50%;
`

export const PortfolioMainImage = styled.img`
    position: fixed;
    width: 10rem;
    right: 17%;
    top: 16%;

    @media screen and (max-width: 768px){
        display: none;
    } 
`