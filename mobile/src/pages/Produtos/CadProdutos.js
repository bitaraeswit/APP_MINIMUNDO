import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

//Arquivo que contém as funções do Async Storage do Produto
import StorageProduto from './StorageProduto';
//criação dos estados com os campos do produto
export default function CadProdutos({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [nome, setNome] = useState(''); 
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setNome(route.params.nome);
    setQuantidade(route.params.quantidade.toString());
    setUnidade(route.params.unidade);
  }, [route])

  //pega os campos digitados nos inputs
  function handleNameChange(nome){ setNome(nome); } 
  function handleQuantityChange(quantidade){ setQuantidade(quantidade); }
  function handleUnitChange(unidade){ setUnidade(unidade); }

  //salva os itens na lista 
  async function handleButtonPress(){ 
    const listItem = {nome, quantidade: parseInt(quantidade), unidade};
    StorageProduto.saveItem(listItem, id)
      .then(response => navigation.navigate("ListaProdutos", listItem));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleNameChange} 
          placeholder="Nome"
          clearButtonMode="always"
          value={nome} /> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleQuantityChange} 
          placeholder="Digite a quantidade" 
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade.toString()} /> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleUnitChange} 
          placeholder="Unidade"
          clearButtonMode="always"
          value={unidade} />   
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Salvar</Text> 
            </View>
          </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3299CC',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#3299CC',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: "row"
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});