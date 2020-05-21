import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
//Importei o banco
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function Produto(props) {

	//Cadastrar produto
	const cadastrarProduto = () => {
		this.state = {
			user_name: '',
		}
		var that = this;
		const { user_name } = this.state;
		if (user_name) {
			db.transaction(function(tx) {
				tx.executeSql(
				'INSERT INTO table_user (user_name) VALUES (?)',
				[user_name],
				(tx, results) => {
					console.log('Results', results.rowsAffected);
					if (results.rowsAffected > 0) {
					Alert.alert(
						'Successo',
						'Cadastrado',
						[
						{
							text: 'Ok',
							onPress: () =>
							that.props.navigation.navigate('Menu'),
						},
						],
						{ cancelable: false }
					);
					} else {
					alert('Falha');
					}
				}
				);
			});
			} else {
			alert('Por favor, digite um nome');
			}
		
	}

	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.logo}>
			<Image
			source={require('../assets/produto.png')}
			/>

			
			
			</View>

			<View style={styles.container}>
				

			<TextInput
				placeholder="Nome do Produto"
				autoCorrect={false}
				//Fiz o user_name ser o que o usuário digitar nesse campo 'Nome do Produto'
				onChangeText={user_name => this.setState({user_name})}
				style={styles.input}
				/>
				<TextInput
				placeholder="Preço"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="Unidade"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="Código do Produto"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>

			<TouchableOpacity style={styles.btnSubmit} onPress = {() => {cadastrarProduto}}>
				<Text style={styles.submitText}>Cadastrar Produto</Text>
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
	btnCadastrar:{
		paddingTop: 25
	},
	logo:{
		flex:1,
		justifyContent: 'center'
	},
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		paddingBottom: 50
	},
	input: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 15,
		color: '#222',
		fontSize: 17,
		borderRadius: 7,
		padding: 10

	},
	btnSubmit: {
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7
	},

	submitText:{
		color: '#FFF',
		fontSize: 18
	},

	btnRegister:{
		marginTop: 10,
	},

	registerText:{
		color: '#FFF'
	},

	textInput:{
		textAlign: 'center',
		fontSize: 20,
		color: '#FFF',
		fontWeight:'bold'
	},

	text: {
		marginTop: 65,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center'
	  }

	
});



