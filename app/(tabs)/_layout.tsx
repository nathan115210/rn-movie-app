import React from 'react';
import {Tabs} from 'expo-router';
import {tabsData} from '@/constants/index';

import TabIcon from '../components/TabIcon';
import {colors} from "@/styles/colors";

const _Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false, tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: colors.dark[200],
                borderColor: colors.dark[200],
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
            }
        }}>
            {tabsData.map((tab, index) => {
                const {name, title, icon} = tab;
                return (
                    <Tabs.Screen
                        key={`tab-${index}`}
                        name={name}
                        options={{
                            title: title,
                            headerShown: false,
                            tabBarIcon: ({focused}: { focused: boolean }) => (
                                <TabIcon title={title} icon={icon} focused={focused}/>
                            ),
                        }}
                    />
                );
            })}
        </Tabs>
    );
};

export default _Layout;