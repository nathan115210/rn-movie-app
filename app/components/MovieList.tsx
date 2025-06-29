import {Movie, useMovies} from '@/hooks/useMovies';
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import {spacing} from "@/styles/spacing";
import {colors} from "@/styles/colors";

import {ActivityIndicator} from "react-native";
import SearchBar from "@/app/components/SearchBar";
import {useRouter} from "expo-router";
import {fontSizes, fontWeights} from "@/styles/fonts";
import MovieCard from "@/app/components/MovieCard";


const IconImage = styled.Image`
    width: ${spacing.xxl};
    height: ${spacing.xxl};
    margin: 60px auto ${spacing.md} auto;
`
const ErrorText = styled.Text`
    color: ${colors.error};
    margin: ${spacing.xl} 0;
    text-align: center;
    font-size: ${fontSizes.lg};
    font-weight: ${fontWeights.bold};
`;


const MovieFlatList = styled.FlatList`
    margin-top: ${spacing.md};
    padding: ${spacing.sm};
    flex: 1;
`
const HeaderView = styled.View`
    margin-bottom: ${spacing.md};
`

const ErrorView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

interface MovieListProps {
    showSearchBar?: boolean;
}

const MovieList: React.FC<MovieListProps> = (props) => {
    const {showSearchBar} = props;

    const router = useRouter();

    const {loading: moviesLoading, error: moviesError, movies, fetchMore} = useMovies();

    const renderHeader = () => {
        return <HeaderView>
            <IconImage source={require('../../assets/icons/logo.png')}/>
            {showSearchBar && (
                <SearchBar
                    placeholder={'Search a movie'}
                    onPressIn={() => router.push('/search')}
                />
            )}
        </HeaderView>
    }

    if (moviesError) {
        return (
            <>
                <IconImage source={require('../../assets/icons/logo.png')}/>
                <ErrorView>
                    <ErrorText>{moviesError}</ErrorText>
                </ErrorView>
            </>

        )
    }

    return (
        <MovieFlatList
            data={movies}
            renderItem={({item}: { item: Movie }) => <MovieCard _id={item.imdbID} poster={item.Poster}
                                                                title={item.Title} year={item.Year}/>}
            keyExtractor={(item: Movie) => item.imdbID}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'flex-start', gap: 10, padding: spacing.md}}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={moviesLoading ? <ActivityIndicator style={{margin: 16}}/> : null}
        />
    );
};

export default MovieList;
