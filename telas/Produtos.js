import React from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity} from 'react-native';
//Importei o banco
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function Produtos(){
    const listarProdutos = () => {
        this.state = {
            FlatListItems: [],
          };
          db.transaction(tx => {
            tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              this.setState({
                FlatListItems: temp,
              });
            });
          });
    }

    ListViewItemSeparator = () => {
        return (
          <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
      };

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


        
        <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.user_id}</Text>
              <Text>Name: {item.user_name}</Text>
            </View>
          )}
        />
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


