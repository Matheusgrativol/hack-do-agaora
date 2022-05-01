import React, { useState } from "react";
import { goBack, goToFeed } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Voltar from "../../images/Vector.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Grid } from '@mui/material';

// import styled from "styled-components"

const TextH1 = styled.h1`
    text-align:center ;
    justify-content: center;
    left: 0%;
    right: 3.38%;
    top: -2.5%;
    bottom: -2.5%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    color: #293285;
`

const Inputs = styled.input`
    margin-bottom:10px ;
    height: 52px;
    width: 343px;
    border-radius: 0px;
    background: #FFFFFF;
    border: 2px solid #3B7636;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #293285;
`

const ButtonCadastro = styled.button`
    background: #3B7636;
    border: 2px solid #3B7636;
    box-sizing: border-box;
    border-radius: 6px;
    height: 52px;
    width: 343px;
    left: 0px;
    top: 0px;
    border-radius: 6px;
    left: 41.77%;
    right: 42.19%;
    top: 36.54%;
    bottom: 34.62%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 15px;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
`

const FormCadastro = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignUpPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const history = useHistory()

    const mudaName = (event) => {
        setName(event.target.value)
    }

    const mudaEmail = (event) => {
        setEmail(event.target.value)
    }

    const mudaSenha = (event) => {
        setSenha(event.target.value)
    }

    const fazerCadastro = (event) => {
        event.preventDefault()
        goToFeed(history)
    }
    return (
        <div>
            <div>
                <Grid onClick={() => goBack(history)} style={{ cursor: 'pointer', margin: '1rem' }}>
                    <ArrowBackIosIcon />
                </Grid>
            </div>
            <Container>
                <div>
                    <TextH1>Cadastro</TextH1>
                </div>
                <FormCadastro>
                    <form onSubmit={fazerCadastro}>
                        <Inputs
                            onChange={mudaName}
                            value={name}
                            placeholder="Nome de usuário"
                        />
                        <Inputs
                            onChange={mudaEmail}
                            value={email}
                            type={"email"}
                            placeholder="E-mail/Telefone"
                        />
                        <Inputs
                            onChange={mudaSenha}
                            value={senha}
                            type={"password"}
                            placeholder="Senha"
                        />
                        <ButtonCadastro>PRONTO</ButtonCadastro>
                    </form>
                </FormCadastro>
            </Container>

        </div>
    )

}

export default SignUpPage