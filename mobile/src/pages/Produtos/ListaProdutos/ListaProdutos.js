import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView , StatusBar} from 'react-native';
import AppProdutos from '../AppProduto/AppProdutos';
import StorageProduto from '../StorageProduto';

//estilização da pagina
import {
  Container,
  TextTitle,
  ScrollCantainer
} from "./styles";
 
export default function ListaProdutos({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  //busca os produtos do storage na função getItem para exibilos na lista
  useEffect(() => {
    StorageProduto.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextTitle>Lista de Produtos</TextTitle>
          <ScrollCantainer //lista dos produtos
              contentContainerStyle={styles.itemsContainer}>
              { items.map(item => { //map percorre e exibe os itens
                return <AppProdutos key={item.id} id={item.id} item={'Item: '+ item.nome + ' -  Quantidade: ' + item.quantidade + '  - Unidade: ' + item.unidade} navigation={navigation} />
              }) }
              
          </ScrollCantainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});
