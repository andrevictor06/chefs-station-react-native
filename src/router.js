import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';

import Main from './pages/Main';
import Receita from './pages/Receita';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

const Stack = createStackNavigator();
export default function Router() {
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };


    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} 
            options={
                { 
                    header:()=>(
                        <View style={{top:5}}>
                            <View style={{width: "100%", flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity style={{width: "20%", alignItems: 'flex-start', left: 10}}>
                                    <Feather name="list" style={styles.iconbtn} size={25}></Feather>
                                </TouchableOpacity>
                                
                                <View style={{width: "60%", justifyContent: 'center', alignItems:'center'}}>
                                    <Image source={{uri: "..../assets/programar.png"}} style={{ width: 70, height: 30 }}></Image>
                                </View>

                                <TouchableOpacity style={{width: "20%", alignItems: 'flex-end', right:15}}>
                                    <Feather name="shopping-cart" style={styles.iconbtn} size={25}></Feather>
                                </TouchableOpacity>
                            </View>
                            <View style={{top:5}}>
                                <SearchBar placeholder="Pesquisar" onChangeText={updateSearch} value={search}/>
                            </View>
                        </View>
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
        height: "20%"
    },
    btnright: {
        height: "20%"
    },
    imageright: {
        height: "80%"
    },
    right : {
        flexDirection: 'row'
    }
});