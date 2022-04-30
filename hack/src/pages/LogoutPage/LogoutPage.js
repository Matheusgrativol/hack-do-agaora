import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { goToLogin, goToSignUp } from "../../routes/coordinator";

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
    /* align-items: flex-start; */
    /* align-self: flex-start; */
`
const ImgLogo = styled.img`
    padding-top: 85vh;
`


const LogoutPage = () =>{

    const history = useHistory()


    return(
        <Container>
            <ImgLogo src="" title="" />
            <ContainerButton>
                <ButtonLogin onClick={() => goToLogin(history)}>LOGIN</ButtonLogin>
                <ButtonSignUp onClick={() => goToSignUp(history)}>CADASTRE-SE</ButtonSignUp>
            </ContainerButton>
        </Container>
    )

}

export default LogoutPage