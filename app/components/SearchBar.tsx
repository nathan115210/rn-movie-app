// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components/native';
import React from 'react'
import {borderRadius, spacing} from "@/styles/spacing";
import {colors} from "@/styles/colors";
import {Pressable} from "react-native";


const SearchBarView = styled.View`
    display: flex;
    flex-direction: row;
    flex: 1;
    margin-top: ${spacing.sm};
    align-items: center;
    background-color: ${colors.dark[200]};
    border-radius: ${borderRadius.full};
    gap: ${spacing.sm};
    padding: 0 ${spacing.sm};
`

const SearchIconImage = styled.Image`
    width: ${spacing.md};
    height: ${spacing.md};
`

const SearchTextInput = styled.TextInput`
    flex: 1;
    color: ${colors.surface};
    height: ${spacing.xl};
`

interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onPressIn?: () => void;
    onChangeText?: (text: string) => void
}

const SearchBar = (props: SearchBarProps) => {
    const {placeholder, onPressIn, value, onChangeText} = props

    return (
        <SearchBarView keyboardShouldPersistTaps="handled">
            <Pressable onPress={onPressIn}>
                <SearchIconImage source={require('../../assets/icons/search.png')} resizeMode={'contain'}
                                 tintColor={colors.accent}/>
            </Pressable>
            <SearchTextInput onPressIn={onPressIn} placeholder={placeholder || 'Search'} value={value}
                             onChangeText={onChangeText}
                             placeholderTextColor={colors.accent}/>
        </SearchBarView>
    )
}
export default SearchBar
