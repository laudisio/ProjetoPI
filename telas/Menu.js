import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function Menu(props) {

	const cadastrar = () => {
		db.transaction(function(txn) {
			txn.executeSql(
			  "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
			  [],
			  function(tx, res) {
				console.log('item:', res.rows.length);
				if (res.rows.length == 0) {
				  txn.executeSql('DROP TABLE IF EXISTS table_user', []);
				  txn.executeSql(
					'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20))',
					[]
				  );
				}
			  }
			);
		  });
	}


	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.container}>

				{/* <TouchableOpacity style={styles.btnSubmit} onPress = {() => {props.navigation.navigate('CadastroLogin')}}>
					<Text style={styles.submitText}>Novo Usuário</Text>
					
				</TouchableOpacity> */}

				<TouchableOpacity style={styles.btLogin} onPress = {() => {props.navigation.navigate('Login')}}>
					<Text style={styles.submitText}>Login</Text>
					
				</TouchableOpacity>

				{/* <TouchableOpacity style={styles.btLoja} onPress = {() => {props.navigation.navigate('Loja')}}>
					<Text style={styles.submitText}>Cadastrar loja</Text>
					
				</TouchableOpacity> */}
				<TouchableOpacity style={styles.BtLoginAdm} onPress = {() => {cadastrar}}>
					<Text style={styles.submitText}>CadastrarTeste</Text>
					
				</TouchableOpacity>

				<TouchableOpacity style={styles.BtLoginAdm} onPress = {() => {props.navigation.navigate('LoginADM')}}>
					<Text style={styles.submitText}>Login ADM</Text>
					
				</TouchableOpacity>
			</View>

		</KeyboardAvoidingView>

	);
 
}

const styles = StyleSheet.create(
	{
	  back: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#191919'
	},
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		paddingBottom: 50
	},
	btnSubmit: {
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
	},

	submitText:{
		color: '#FFF',
		fontSize: 18
    },

    btLogin:{
        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
    },
    btLoja:{
        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
    },

    BtLoginAdm:{

        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15

    }
    
});



