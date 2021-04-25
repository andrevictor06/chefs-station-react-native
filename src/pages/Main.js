import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


let DATA = [
    {
      id: '001',
      title: 'Caldo Cabeça de Galo à Paraibana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsfhamaruhg1tELhZIWAlo2Sg7v6Vmv2aeA&usqp=CAU',
      tempo: '  ',
    },
    {
      id: '002',
      title: 'Coxinha de Batata',
      image: 'https://catracalivre.com.br/wp-content/uploads/2019/12/thumb.jpg',
      tempo: '1h e 30 min',
    },
    {
      id: '003',
      title: 'Empadão Goiano com Guariroba',
      image: 'https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2020/11/thumb-Receitas-com-frango-10-opcoes-para-enriquecer-seu-cardapio.jpg',
      tempo: '30 min',
    },
    {
        id: '004',
        title: 'Caldo Cabeça de Galo à Paraibana',
        image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-rapidas-1200x774.jpg',
        tempo: '40 min',
    },
    {
        id: '005',
        title: 'Coxinha de Batata',
        image: 'https://www.daninoce.com.br/wp-content/uploads/2019/05/receitas-doces-para-o-dia-a-dia-destaque-960x625.jpg',
        tempo: '1h e 30 min',
    },
    {
        id: '006',
        title: 'Empadão Goiano com Guariroba',
        image: 'https://i.pinimg.com/736x/d7/6c/c7/d76cc7cdd8eb1b94b37e32ff5d3f220c.jpg',
        tempo: '30 min',
    },
  ];
  

  const getDestaquesFromApiAsync = async (param1, param2) => {
    try {
        console.log(param1, param2, "param1, param2")
      let response = await fetch( 'http://192.168.0.112:8080/receitas'  );
      let json = await response.json();
      console.log(json, " json")
      return json;
    } catch (error) {
      console.error(error);
    }
  };
export default function Main() {
    const navigation = useNavigation();
    getDestaquesFromApiAsync();
    const Item = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('receita')}>
            <View style={styles.center}>
                <Image style={styles.itemimagem} source={{ uri: item.image  , }} />
            </View>
            <View style={styles.itemconteudo}>
                <Text style={styles.receita}>{item.title}</Text>
            </View>
            <View style={styles.itemconteudo}>
                <Text style={styles.tempo}>{item.tempo}</Text>
            </View>
        </TouchableOpacity>
      );

    const renderItem = ({ item }) => (
        <Item item={item} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Destaques</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>

                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Recomendações</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>
                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Mais Curtidas</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>

                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Especialidades para o Café da Manhã</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>

                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Especialidades para o Almoço</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>

                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Especialidades para o Lanche da Tarde</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                </View>

                <View style={styles.destaques}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Especialidades para a Janta</Text>
                    </View>
                    <View style={styles.conteudo}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    </View>
                    
                </View>
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
        borderRadius: 8,
        borderWidth: 0.5

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
        borderRadius: 10,
    }
  });