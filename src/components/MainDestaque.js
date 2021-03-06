import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image, Card } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function MainDestaque(params) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const config = params.config;
    useEffect(() => {
        fetch(config.url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
          },
        })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const navigation = useNavigation();

    const selectedItem = (item) =>{
        //alert('You tapped the button!')
        navigation.navigate('receita', {
            item : (item.item) ? item.item: item
        })
    }
    const Item = ({ item }) => (
        <TouchableOpacity onPress={()=> selectedItem({item})}>
            <Card>
                <Card.Image source={{uri: item.image}}>
                    <Text></Text>
                </Card.Image>
                <Card.Divider/>
                <Card.FeaturedSubtitle>
                    <View style={styles.itemconteudo}>
                        <Divider style={{ backgroundColor: 'blue' }} />
                        <Text style={styles.receita}>{item.title}</Text>
                    </View>
                </Card.FeaturedSubtitle>
            </Card>
        </TouchableOpacity>
        /*<TouchableOpacity style={styles.item} onPress={()=> selectedItem({item})}>
            <View style={styles.center}>
                <Image style={styles.itemimagem} source={{ uri: item.image  , }} />
            </View>
            <View style={styles.itemconteudo}>
                <Divider style={{ backgroundColor: 'blue' }} />
                <Text style={styles.receita}>{item.title}</Text>
            </View>
            <View style={styles.itemconteudo}>
                <Text style={styles.tempo}>{item.tempo}</Text>
            </View>
        </TouchableOpacity>*/
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    
  return (
    <View style={styles.destaques}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>{config.name}</Text>
        </View>
        <View style={styles.conteudo}>
            {isLoading ? <ActivityIndicator size="large" color="#00ff00"/> : (
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} renderItem={renderItem} keyExtractor={item => item.id} />
            )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
      width: 140,
      height: 140,
      borderRadius: 8,
  }
});