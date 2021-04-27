import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import MainDestaque from '../components/MainDestaque';

/*
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
  ];*/
  
export default function Main() {
    const [isLoading, setLoading] = useState(false);
    const [url, setUrl] = useState("http://192.168.0.131:8080");
    
    return (
        <SafeAreaView style={styles.container}>

            {isLoading ? <ActivityIndicator size="large" color="#00ff00"/> : (
            <ScrollView>

                <MainDestaque config={{name: "Destaque", url:  url + "/receitas/destaques"}}/>

                <MainDestaque config={{name: "Recomendações", url: url + "/receitas/recomendacoes"}}/>

                <MainDestaque config={{name: "Mais Curtidas", url: url + "/receitas/curtidas"}}/>

                <MainDestaque config={{name: "Especialidades para o Café da Manhã", url: url + "/receitas/cafemanha"}}/>

                <MainDestaque config={{name: "Especialidades para o Almoço", url: url + "/receitas/almoco"}}/>

                <MainDestaque config={{name: "Especialidades para o Lanche da Tarde", url: url + "/receitas/lanche"}}/>

                <MainDestaque config={{name: "Especialidades para o Jantar", url: url + "/receitas/jantar"}}/>

            </ScrollView>
            )}
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
        width: 140,
        height: 140,
        borderRadius: 8,
    }
  });