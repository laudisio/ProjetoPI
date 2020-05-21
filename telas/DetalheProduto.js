import React from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity} from 'react-native';




export default function DetalheProduto(){
    return (
    <View style={styles.container}>
        <Image
        source={require('../assets/alcool.png')}
         style={styles.imagem}
        />
        <View style={styles.descricao}>
        <Text style={styles.titulo}>Alcool em Gel</Text>
        <Text style={styles.tituloNome}>Quantidade: 80</Text>
        <Text style={styles.tituloNome}>Preço Unidade: R$ 4,50</Text>
        </View>
    </View>

    
    )
}


const styles = StyleSheet.create({
    container:{
        height: 100,
        borderWidth: 1,
        borderColor: "#191919",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    imagem:{
        height: 80,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    descricao:{
        flex: 2,
        padding: 10
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloNome:{
        color: 'gray'
    }
})


