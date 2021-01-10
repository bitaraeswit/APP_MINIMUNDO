import React, {useState, useEffect} from 'react';
import {  StatusBar, ScrollView} from 'react-native';
import AppCompras from '../AppCompras/AppCompras';
import StorageCompras from '../StorageCompras';

//estilização da pagina
import {
  Container,
  TextContainer,
  TextTitle,
  ScrollContainer
} from "./styles";
 
 
export default function ListaCompras({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  //busca os do storage na função getItem para exibilos na lista
  useEffect(() => {
    StorageCompras.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextContainer>
          <TextTitle>Lista de Compras</TextTitle>
        </TextContainer>
        <ScrollContainer> 
          <ScrollView showsVerticalScrollIndicator={false}>
              { items.map(item => { //map percorre e exibe os itens
                return <AppCompras key={item.id} id={item.id} item={'Cliente: '+ item.nameClient  + '\n' + 'Produto: ' + item.nameProduct + '\n' + ' Quantidade: ' + item.quantityPurchase + '\n' + ' Data da Compra: ' + item.datePurchase+ '\n' + ' Rua: ' + item.street+ '\n' + ' Bairro: ' + item.district+ '\n' + ' Número: ' + item.number} navigation={navigation} />
              }) } 
          </ScrollView>
        </ScrollContainer>
    </Container>
  );
}

