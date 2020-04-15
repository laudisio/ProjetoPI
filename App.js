import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[produto, setProduto] = useState ('');
  
  const capturarProduto = (produto) => {
	  setProduto (produto);
  };
  // parei no 48:28 min da aula
  const adicionarProduto = () =>{
	  console.log (produto)
  };
  
  return (
    <View style={styles.telaPrincipalView}>
      
	  <View>
		<Text style={styles.textoTitulo}>Cadastro de Produtos</Text>
		<Text style={styles.textoText}>Digite o nome e as unidades de um produto para cadastrar</Text>
	  </View>
	  
	  <View style={styles.produtoView}>
		  
	  <TextInput
		placeholder="Produto..."
		style={styles.produtoInputText}
	  />
	  
	  <TextInput
		placeholder="Unidades..."
		style={styles.produtoInputText}
	  />
	  
		<View style={styles.btnCadastrar}>
			<Button
			title="Cadastrar"
			/>
		</View>
		
	  </View>
	  
	  <View>
	  
	  </View>
	  
    </View>
  );
}

const styles = StyleSheet.create(
	{
	  telaPrincipalView: {
		padding: 50,
		backgroundColor: '#0066FF'
	},
	  produtoView: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	produtoInputText: {
		width: '80%',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 4
	},
	textoTitulo: {
		textAlign: 'center',
		padding: 5,
		fontSize: 30
	},
	textoText: {
		textAlign: 'center',
		paddingBottom: 20,
		paddingTop: 5,
		fontSize: 15
	},
	btnCadastrar:{
		paddingTop: 25
	}
	
});



