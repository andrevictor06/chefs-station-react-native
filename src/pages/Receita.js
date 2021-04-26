import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Receita(params) {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    //setLoading(false);
    //setReceita(params.route.params.item);
    fetch("http://192.168.0.120:8080/receitas/pesquisar", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params.route.params.item)
    })
    .then((response) => response.json())
    .then((json) => {
      setReceita(json);
      navigation.setOptions({
        title: json.title,
      });
    })
    .catch((error) => setReceita(params.route.params.item))
    .finally(() => setLoading(false));

  }, []);

  /*useEffect(() => {
    while(isLoading){
      if(receita != null){
        navigation.setOptions({
          title: receita.title,
        })
      }
    }
  }, []);*/
  
  //console.log(receita, 'receita', params);
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.conteudo}>
      {receita == null ? <ActivityIndicator size="large" color="#00ff00"/> : (
        <View style={styles.conteudo}>  
          <View style={styles.center}>
            <Image style={styles.itemimagem} source={{ uri: receita.image  , }} />
          </View>
          <View style={styles.center}>
            <Text  style={styles.titulo}> {receita.title} </Text>
          </View>
        </View>
      )}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
      backgroundColor: '#FFF',
      marginRight: 5,
      height: 250,
      width: 150,
      borderColor: "#000",
      borderRadius: 8
  },
  itemconteudo: {
      top: 5,
      padding: 5,

      justifyContent: 'flex-start',
  },
  receita: {
      fontSize: 15,
  },
  tempo: {
      fontSize: 13,
      justifyContent: 'flex-end',
  },
  destaques: {
      marginVertical: 8,
      marginHorizontal: 16,
  },
  titulo: {
      fontSize: 20,
  },
  cabecalho: {
      
  },
  conteudo: {

  },
  center: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 4,
  },
  itemimagem: {
      width: 280,
      height: 280,
      borderRadius: 8,
  }
});