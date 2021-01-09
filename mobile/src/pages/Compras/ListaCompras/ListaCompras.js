import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView , StatusBar} from 'react-native';
import AppCompras from '../AppCompras/AppCompras';
import StorageCompras from '../StorageCompras';

//estilização da pagina
import {
  Container,
  TextTitle,
  ScrollCantainer
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
        <TextTitle style={styles.title}>Lista de Compras</TextTitle>
        <ScrollCantainer //lista dos Compras
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => { //map percorre e exibe os itens
              return <AppCompras key={item.id} id={item.id} item={'Item: '+ item.nome + ' -  Quantidade: ' + item.quantidade + '  - Unidade: ' + item.unidade} navigation={navigation} />
            }) }
        </ScrollCantainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3299CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
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
