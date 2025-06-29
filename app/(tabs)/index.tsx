// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import {colors} from "@/styles/colors";


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: ${colors.primary};
`;


export default function Index() {
    return (
        <Container>
            <Title>Welcome!</Title>
        </Container>
    );
}