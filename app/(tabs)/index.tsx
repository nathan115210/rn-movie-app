// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import {colors} from "@/styles/colors";
import {spacing} from "@/styles/spacing";
import SearchBar from "@/app/components/SearchBar";
import {useRouter} from 'expo-router';
import {Pressable} from "react-native";


const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;


const ImageContainer = styled.Image`
    position: absolute;
    width: 100%;
    z-index: 0;
`

const StyledScrollView = styled.ScrollView`
    flex: 1;
    padding: ${spacing.sm} ${spacing.sm} ${spacing.md} ${spacing.sm};
    min-height: 100%;
`
const IconImage = styled.Image`
    width: ${spacing.xxl};
    height: ${spacing.xxl};
    margin: 60px auto ${spacing.md} auto;
`

export default function Index() {
    const router = useRouter();

    return (
        <Container>
            <ImageContainer source={require('../../assets/images/bg.png')}/>

            <StyledScrollView showsHorizontalScrollIndicator={false}>
                <IconImage source={require('../../assets/icons/logo.png')}/>
                <SearchBar placeholder={'Search a movie'} onPressIn={() => router.push('/search')}/>
            </StyledScrollView>
        </Container>
    );
}