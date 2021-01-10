import React, {useState, useEffect} from 'react';
import { StatusBar } from 'react-native';

//Arquivo que contém as funções do Async Storage do Cliente
import StorageCliente from '../StorageCliente';

//estilização da página
import {
  Container,
  TextContainer,
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

  function handleNameChange(name){ 
    setName(name); 
  } 
  function handleEmailChange(email){ 
    setEmail(email); 
  } 
  function handleBirthChange(birth){ 
    setBirth(birth); 
  }
  //insere is itens no storage
  async function handleButtonPress(){ 
    const listClient = {name, email, birth};
    StorageCliente.saveClient(listClient, id)
      .then(response => navigation.navigate("ListaClientes", listClient));
    
      //limpa os campos após inserir
    setBirth("");
    setEmail("");
    setName("");  
  }

  return (
    <Container>
      <TextContainer>
        <TextTitle>Cadastro de Clientes</TextTitle>
      </TextContainer>
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
          <Button onPress={handleButtonPress}> 
            <ButtonContainer>
                <ButtonText>Salvar</ButtonText> 
            </ButtonContainer>
          </Button>
      </InputContainer>
      <StatusBar style="light" />
    </Container>
  );
}