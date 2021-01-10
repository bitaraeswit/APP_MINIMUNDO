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
  const [purchases, setPurchases] = useState([]);
  
  //busca os do storage na função getItem para exibilos na lista
  useEffect(() => {
    StorageCompras.getPurchases().then(purchases => setPurchases(purchases));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextContainer>
          <TextTitle>Lista de Compras</TextTitle>
        </TextContainer>
        <ScrollContainer> 
          <ScrollView showsVerticalScrollIndicator={false}>
              { purchases.map(purchase => { //map percorre e exibe os itens
                return <AppCompras key={purchase.id} id={purchase.id} purchase={'Cliente: '+ purchase.nameClient  + '\n' + 'Produto: ' + purchase.nameProduct + '\n' + ' Quantidade: ' + purchase.quantityPurchase + '\n' + ' Data da Compra: ' + purchase.datePurchase+ '\n' + ' Rua: ' + purchase.street+ '\n' + ' Bairro: ' + purchase.district+ '\n' + ' Número: ' + purchase.number} navigation={navigation} />
              }) } 
          </ScrollView>
        </ScrollContainer>
    </Container>
  );
}

