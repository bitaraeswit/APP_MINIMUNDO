import React, {useState, useEffect} from 'react';
import { StatusBar } from 'react-native';
import { Picker } from "@react-native-picker/picker";

//Arquivo que contém as funções do Async Storage do Produto
import StorageProduto from '../StorageProduto';

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

//criação dos estados com os campos do produto
export default function CadProdutos({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [nome, setNome] = useState(''); 
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [categoriaProd, setCategoriaProd] = useState("Frios" );


  //carrega os produtos 
  useEffect(() => {
    if(!route.params) return;
    setNome(route.params.nome);
    setQuantidade(route.params.quantidade.toString());
    setUnidade(route.params.unidade);
  }, [route])

  //pega os campos digitados nos inputs
  function handleNameChange(nome){ 
    setNome(nome); 
  } 
  function handleQuantityChange(quantidade){ 
    setQuantidade(quantidade); 
  }
  function handleUnitChange(unidade){ 
    setUnidade(unidade); 
  }

  //salva os itens na lista 
  async function handleButtonPress(){ 
    const listItem = {nome, quantidade: parseInt(quantidade), unidade, categoriaProd};
    StorageProduto.saveItem(listItem, id)
      .then(response => navigation.navigate("ListaProdutos", listItem));

    //limpa os campos após salvar
    setNome("");
    setQuantidade("");
    setUnidade("");
  }

  return (
    <Container>
      <TextContainer>
        <TextTitle>Cadastro de Produtos</TextTitle>
      </TextContainer>
      <InputContainer>
        <Picker
          prompt="Categoria Produto"
          itemStyle={{
            fontSize: 16,
            color: "#696969",
            alignItems: "center"
          }}
          selectedValue={categoriaProd}
          onValueChange={ (itemValue, itemIndex) => setCategoriaProd(itemValue)}
        >
          <Picker.Item key={1} value="Frios"          label="Frios"  />
          <Picker.Item key={2} value="Higiene Pessoal"label="Higiene Pessoal"  />
          <Picker.Item key={3} value="Grãos"          label="Grãos"  />
          <Picker.Item key={4} value="Vestuário"      label="Vestuário"  />
        </Picker>

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
