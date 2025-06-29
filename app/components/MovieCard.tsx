import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import {Movie} from '@/hooks/useMovies';
import {colors} from '@/styles/colors';
import {Link} from "expo-router";
import {borderRadius, spacing} from "@/styles/spacing";
import {isValidImageUrl} from "@/utils/utils";
import {Href} from "expo-router/build/types";
import {fontSizes} from "@/styles/fonts";

const MovieCardContainer = styled.TouchableOpacity`
    width: 30%;
    margin-bottom: ${spacing.md}
`;

const MoviePoster = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: ${borderRadius.lg}
`;

const MovieTitle = styled.Text`
    margin-top: ${spacing.xs};
    font-size: ${fontSizes.xs};
    color: ${colors.light[100]};
`;

const YearText = styled.Text`
    margin-top: ${spacing.xs};
    color: ${colors.muted};
`

interface MovieCardProps {
    _id: Movie['imdbID'];
    title: Movie['Title'];
    year: Movie['Year'];
    poster: Movie['Poster'];
}

const MovieCard = ({_id, year, poster, title}: MovieCardProps) => {
    const [isValidPoster, setIsValidPoster] = React.useState<boolean>(false)

    React.useEffect(() => {
        (async () => {
            const valid = await isValidImageUrl(poster);
            setIsValidPoster(valid)

        })();
    }, [poster]);

    return (
        <Link href={`/movies/${_id}` as Href} asChild>
            <MovieCardContainer>
                <MoviePoster
                    source={isValidPoster ? {uri: poster} : require('../../assets/images/no-poster.png')}
                    rezizeMode="cover"
                />
                <MovieTitle>{title}</MovieTitle>
                <YearText>{year}</YearText>
            </MovieCardContainer>
        </Link>
    );
};

export default MovieCard;