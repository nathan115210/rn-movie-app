import styled from "styled-components/native";
import React from 'react';
import {images} from '@/constants/index';
import {Text} from 'react-native';
import {ImageBackground} from "expo-image";
import {borderRadius, spacing} from "@/styles/spacing";
import {colors} from "@/styles/colors";
import {fontSizes, fontWeights} from "@/styles/fonts";

const TabImageBackground = styled(ImageBackground)`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    min-width: 112px;
    min-height: 56px;
    margin-top: ${spacing.md};
    justify-content: center;
    align-items: center;
    border-radius: ${borderRadius.full};
    overflow: hidden;
`;

const TabText = styled(Text)`
    color: ${colors.secondary};
    font-size: ${fontSizes.lg};
    font-weight: ${fontWeights.medium};
    margin-left: ${spacing.sm};
    margin-left: ${spacing.sm};
    line-height: ${spacing.lg};
`;

const NonFocusedTabView = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: ${spacing.md};
`
const TabImage = styled.Image`
    width: ${spacing.lg};
    height: ${spacing.lg};
`

interface TabIconProps {
    title: string;
    icon: any;
    focused: boolean;
}

const TabIcon = (props: TabIconProps) => {
    const {title, icon, focused} = props;

    const ContainerEle = focused ? TabImageBackground : NonFocusedTabView;
    const tabImageTintColor = focused ? colors.secondary : colors.light[200];
    return <ContainerEle source={images.highlight}>
        <TabImage source={icon} style={{tintColor: tabImageTintColor}}/>
        {focused && <TabText>{title}</TabText>}
    </ContainerEle>

};

export default TabIcon;