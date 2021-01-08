import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

//Arquivo que contém as funções do Async Storage do Cliente
import StorageCliente from './StorageCliente';

//declaração campos do cadastro de clientes
export default function CadCliente({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [birth, setBirth] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setName(route.params.name);
    setEmail(route.params.email);
    setBirth(route.params.birth);
  }, [route])

  function handleNameChange(name){ setName(name); } 
  function handleEmailChange(email){ setEmail(email); } 
  function handleBirthChange(birth){ setBirth(birth); }
  async function handleButtonPress(){ 
    const listClient = {name, email, birth};
    StorageCliente.saveClient(listClient, id)
      .then(response => navigation.navigate("ListaClientes", listClient));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Clientes</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleNameChange} 
          placeholder="Nome"
          clearButtonMode="always"
          value={name} /> 
         <TextInput 
          style={styles.input} 
          onChangeText={handleEmailChange} 
          placeholder="Email"
          clearButtonMode="always"
          value={email} /> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleBirthChange} 
          placeholder="Digite a data de nascimento" 
          clearButtonMode="always"
          value={birth} /> 
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