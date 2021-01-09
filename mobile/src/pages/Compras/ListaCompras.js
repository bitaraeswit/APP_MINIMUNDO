import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView , StatusBar} from 'react-native';
import AppCompras from './AppCompras';
import StorageCompras from './StorageCompras';
 
export default function ListaCompras({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  //busca os do storage na função getItem para exibilos na lista
  useEffect(() => {
    StorageCompras.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Compras</Text>
        <ScrollView //lista dos Compras
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => { //map percorre e exibe os itens
              return <AppCompras key={item.id} id={item.id} item={'Item: '+ item.nome + ' -  Quantidade: ' + item.quantidade + '  - Unidade: ' + item.unidade} navigation={navigation} />
            }) }
        </ScrollView>
    </View>
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
