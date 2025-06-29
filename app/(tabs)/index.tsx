import React from "react";
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import {colors} from "@/styles/colors";
import MovieList from "@/app/components/MovieList";

const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;


const ImageContainer = styled.Image`
    position: absolute;
    width: 100%;
    z-index: 0;
`


export default function Index() {

    return (
        <Container>
            <ImageContainer source={require('../../assets/images/bg.png')}/>
            <MovieList showSearchBar={true}/>
        </Container>
    );
}