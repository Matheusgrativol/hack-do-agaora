import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Grid } from '@mui/material';
import { goBack } from "../../routes/coordinator";
import Footer from "../../images/Footer.png"
import Navigation from "../../components/Navigation";
import fundoFeed from "../../images/fundoFeed.png"

const ArticleH2 = styled.h2`
    left: 0%;
    right: -127.7%;
    top: 25%;
    bottom: 22.5%;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    color: #3B7736;
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
`

const ArticleP = styled.p`
    left: 5.07%;
    right: 2.67%;
    top: 19.33%;
    bottom: 21.43%;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;

    color: #030B0D;
`
const Container = styled.article`
    margin: 1rem;
`
const ContainerPatrocinios = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const H4Patrocinios = styled.h4`
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: #293285;
`
const ContainerPai = styled.div`
    background-image: url(${fundoFeed});
`
const FeedPage = () => {
    const history = useHistory()

    return (

        <ContainerPai>
            <div>
                <Grid onClick={() => goBack(history)} style={{ cursor: 'pointer', margin: '1rem' }}>
                    <ArrowBackIosIcon />
                </Grid>
            </div>
            <Container>
                <ArticleH2>Entenda quais os impactos do descarte de pilhas e baterias</ArticleH2>
                <ArticleP>
                    Os restos de equipamentos eletrônicos contêm mais de 20 tipos de componentes que podem ser extremamente prejudiciais à saúde e ao meio ambiente e podem resultar na contaminação do espaço e das pessoas que fazem a sua manipulação, como as pessoas que separam materiais para reciclagem.<br/><br/>
                    Descartando uma pilha da forma correta, por exemplo,você pode evitar a contaminação de 20mil<br/>
                    litros de água e o solo por 50 anos. O zinco, o chumbo e o manganês são metais<br/>
                    encontrados nas pilhas e quando jogados de maneira incorreta no lixo podem contaminar o solo e o lençol freático. Se estes metais forem parar na água e entrarem na cadeia<br/>
                    alimentar podem causar sérios problemas à saúde, como câncer e danos ao sistema nervoso central.<br/><br/>
                    Para ajudar você a descartar seu lixo eletrônico da forma correta temos máquinas onde seu lixo é convertido em pontos que podem ser utilizados nos nossos parceiros que disponibilizam os EcoRetornos.
                </ArticleP>
            </Container>
            <div>
                <H4Patrocinios>PARCEIROS:</H4Patrocinios>
            </div>
            <ContainerPatrocinios>
                <img src={Footer} alt="Pareceiros" title="Parceiros"/>
            </ContainerPatrocinios>
            <Navigation/>
        </ContainerPai>

    )
}

export default FeedPage