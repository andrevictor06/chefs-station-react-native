import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PricingCard, Image } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';

export default function Receita(params) {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [receita, setReceita] = useState(null);
  const [url, setUrl] = useState("http://192.168.0.131:8080");

  useEffect(() => {
    fetch(url + "/receitas/pesquisar", {
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

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearProgress color="primary" value={0.5} />
        <View>
          <Button title="Open Overlay" onPress={toggleOverlay} />

          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <PricingCard color="#4f9deb" title="Free" price="$0" info={['1 User', 'Basic Support', 'All Core Features']} button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}/>
          </Overlay>
        </View>
        <PricingCard color="#4f9deb" title="Free" price="$0" info={['1 User', 'Basic Support', 'All Core Features']} button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}/>
        <PricingCard color="#ff006f" title="Starter" price="$19" info={['10 Users', 'Basic Support', 'All Core Features']} button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}/>
        

        <View style={styles.conteudo}>
          {receita == null ? <ActivityIndicator size="large" color="#00ff00"/> : (
            <View style={styles.conteudo}>  
              <View style={styles.center}>
                <Image style={styles.itemimagem} source={{ uri: receita.image}} />
              </View>
              <View style={styles.center}>
                <Text  style={styles.titulo}> {receita.title} </Text>
              </View>
            </View>
          )}</View>
        </ScrollView>
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