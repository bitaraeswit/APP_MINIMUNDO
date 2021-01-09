import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

//Arquivo que contém as funções do Async Storage do Compras
import StorageCompras from '../StorageCompras';

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

//criação dos estados com os campos do Compras
export default function CadCompras({ route, navigation }) {
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
    StorageCompras.saveItem(listItem, id)
      .then(response => navigation.navigate("ListaCompras", listItem));
  }

  return (
    <Container>
      <TextTitle>Cadastro de Compras</TextTitle>
      <InputContainer> 
        <Input 
          onChangeText={handleNameChange} 
          placeholder="Nome"
          clearButtonMode="always"
          value={nome} /> 
        <Input
          onChangeText={handleQuantityChange} 
          placeholder="Quantidade" 
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade.toString()} /> 
        <Input
          onChangeText={handleUnitChange} 
          placeholder="Unidade"
          clearButtonMode="always"
          value={unidade} />  
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