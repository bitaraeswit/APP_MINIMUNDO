import React, {useState, useEffect} from 'react';
import { StatusBar, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Picker } from "@react-native-picker/picker";

//import dos arquivos que contem as funcoes do asyncstorage
import StorageCompras from '../StorageCompras';
import StorageCliente from '../../Clientes/StorageCliente';
import StorageProduto from '../../Produtos/StorageProduto';

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

//criação dos estados com os campos do Compras
export default function CadCompras({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  //estados utilizados para carregar os itens no picker
  const [clients, setClients] = useState([]); 
  const [products, setProducts] = useState([]); 

  //estados utilizados para salvar os campos da tela de compras
  const [nameClient, setNameClient] = useState(''); 
  const [nameProduct, setNameProduct] = useState('');
  const [quantityPurchase, setQuantityPurchase] = useState('');
  const [datePurchase, setDatePurchase] = useState ('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [number, setNumber] = useState('');

  //carrega os clientes cadastrados
  useEffect(() => {
    StorageCliente.getClients().then(clients => setClients(clients));
  }, []);  

  //carrega os produtos cadastrados
  useEffect(() => {
    StorageProduto.getItems().then(products => setProducts(products));
  }, []); 


  //carrega os campos do cadastro 
  useEffect(() => {
    if(!route.params) return;
    setQuantityPurchase(route.params.quantityPurchase.toString());
    setDatePurchase(route.params.datePurchase);
    setStreet(route.params.street);
    setDistrict(route.params.district);
    setNumber(route.params.number.toString());
  }, [route])

  //pega os campos digitados nos inputs
   function handleQuantityChange(quantityPurchase){ 
      setQuantityPurchase(quantityPurchase);
   }
   function handleDatePurchaseChange (datePurchase){
     setDatePurchase(datePurchase);
   }
   function handleStreetChange (street){
    setStreet(street);   
   }
   function handleDistrictChange (district){
    setDistrict(district);   
   }
   function handleNumberChange (number){
    setNumber(number);  
   }

 /*
 função responsável ṕor percorrer os produtos salvos no AsyncStorage
 caso encontre o produto verifica se a quantidade disponivel no estoque é 
 maior ou igual a quantidade digitada para compra, se sim salva a compra no storage,
 se não, manda uma alerta ao usuário. 
 */
  async function handleButtonPress(){ 
    products.map(p => {
      if (p.nome === nameProduct) {
        if (parseInt(p.quantidade) >= quantityPurchase ) {
          const listPurchase = {nameClient, nameProduct, quantityPurchase: parseInt(quantityPurchase), datePurchase, street, district, number};
          StorageCompras.savePurchase(listPurchase, id)
          .then(response => navigation.navigate("ListaCompras", listPurchase));

          setQuantityPurchase("");
          setDatePurchase("");
          setStreet("");
          setDistrict("");
          setNumber("");

        }else {
          Alert.alert ("Atenção!", "Quantidade indisponível");
        }
      }
    })
  }

  return (
    <KeyboardAvoidingView 
    style={{flex: 1, backgroundColor:"#fff"}}
    behavior={Platform.OS == 'ios' ? 'padding': undefined}
    enabled
    >
      <ScrollView>
        <Container>
          <TextContainer>
            <TextTitle>Cadastro de Compras</TextTitle>
          </TextContainer>
          <InputContainer> 
            <Picker
              selectedValue={nameClient}
              onValueChange={ (itemValue, itemIndex) => setNameClient(itemValue) }
              prompt="Selecione o cliente"
            >
              {clients.map(c => (
                <Picker.Item key={c.id} value={c.name} label={c.name} />
              ))}
            </Picker>
            <Picker
              selectedValue={nameProduct}
              onValueChange={ (itemValue, itemIndex) => setNameProduct(itemValue)  }
              prompt="Selecione o produto"
            >
              {products.map(p => (
                <Picker.Item key={p.id} value={p.nome} label={p.nome} />
              ))}
            </Picker> 
            <Input
                onChangeText={handleQuantityChange} 
                placeholder="Quantidade" 
                keyboardType={'numeric'}
                clearButtonMode="always"
                value={quantityPurchase} 
            /> 
            <Input
                onChangeText={handleDatePurchaseChange} 
                placeholder="Data Compra" 
                clearButtonMode="always"
                value={datePurchase} 
            />
            <Input
                onChangeText={handleStreetChange} 
                placeholder="Rua" 
                clearButtonMode="always"
                value={street} 
            />
            <Input
                onChangeText={handleDistrictChange} 
                placeholder="Bairro" 
                clearButtonMode="always"
                value={district} 
            />
            <Input
                onChangeText={handleNumberChange} 
                placeholder="Número" 
                keyboardType={'numeric'}
                clearButtonMode="always"
                value={number} 
            />  

            <Button onPress={handleButtonPress}> 
              <ButtonContainer>
                <ButtonText>Salvar</ButtonText> 
              </ButtonContainer>
            </Button>

          </InputContainer>
          <StatusBar style="light" />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView> 
  );
}