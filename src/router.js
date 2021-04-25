import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Receita from './pages/Receita';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator();
export default function Router() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} 
            options={
                { 
                    title: 'Página Inicial',
                    headerLeft:()=>(
                        <TouchableOpacity style={styles.btnleft}>
                            <Feather name="list" style={styles.iconbtn} size={25}></Feather>
                        </TouchableOpacity>
                    ),
                    headerRight:()=>(
                        <TouchableOpacity style={styles.btnright}> 
                            <Feather name="more-vertical" style={styles.iconbtn} size={25}></Feather>
                        </TouchableOpacity>
                    )
                }
            }

            />
            <Stack.Screen name="receita" component={Receita} options={
                { 
                    title: 'Receita',
                    headerRight:()=>(
                        <TouchableOpacity style={styles.btnright}> 
                            <Feather name="more-vertical" style={styles.iconbtn} size={25}></Feather>
                        </TouchableOpacity>
                    )
                }
            }/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    btnleft: {
        left : 15
    },
    btnright: {
        right: 15
    }
});