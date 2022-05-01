import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToLogin, goToSignUp } from "../../routes/coordinator";
import fundo from "../../images/fundo.png";
import Logo from "../../images/Logo.png";

const ButtonLogin = styled.button`
    background: #FFFFFF;
    border: 2px solid #293285;
    box-sizing: border-box;
    border-radius: 6px;
    width: 167px;
    height: 52px;
    left: 16px;
    top: 727px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #293285;
`
const ButtonSignUp = styled.button`
    background: #3B7636;
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 15px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 167px;
    height: 52px;
    left: 16px;
    top: 727px;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 111px;
    top: 686px;
    background: #C5D0E1;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${fundo});
    /* align-items: flex-start; */
`
const ImgLogo = styled.img`
    width: 286px;
    height: 251px;
    left: 45px;
    top: 230px;
    padding-top: 26vh;
    padding-bottom: 25vh;
    align-self: center;

`


const LogoutPage = () =>{

    const history = useHistory()


    useEffect(()=>{
        
    }, [history])

    return(
        <Container>
            <ImgLogo src= {Logo} title="" />
            <ContainerButton>
                <ButtonLogin onClick={() => goToLogin(history)}>LOGIN</ButtonLogin>
                <ButtonSignUp onClick={() => goToSignUp(history)}>CADASTRE-SE</ButtonSignUp>
            </ContainerButton>
        </Container>
    )

}

export default LogoutPage