import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

//Arquivo que contém as funções do Async Storage do Cliente
import StorageCliente from '../StorageCliente';

//estilização da página
import {
  Container,
  TextTitle,
  InputContainer,
  Input,
  Button,
  ButtonContainer,
  ButtonText
} from "./styles";

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
    <Container>
      <TextTitle>Cadastro de Clientes</TextTitle>
      <InputContainer> 
        <Input 
          onChangeText={handleNameChange} 
          placeholder="Nome"
          clearButtonMode="always"
          value={name} /> 
         <Input 
          onChangeText={handleEmailChange} 
          placeholder="Email"
          clearButtonMode="always"
          value={email} /> 
        <Input 
          onChangeText={handleBirthChange} 
          placeholder="Data de nascimento" 
          clearButtonMode="always"
          value={birth} /> 
          <Button> 
            <TouchableOpacity onPress={handleButtonPress}> 
              <ButtonContainer>
                <ButtonText>Salvar</ButtonText> 
              </ButtonContainer>
            </TouchableOpacity> 
          </Button>
      </InputContainer>
      <StatusBar style="light" />
    </Container>
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