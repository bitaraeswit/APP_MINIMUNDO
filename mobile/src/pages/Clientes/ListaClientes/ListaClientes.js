import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView , StatusBar} from 'react-native';
import AppClientes from '../AppClientes/AppClientes';
import StorageCliente from '../StorageCliente';

import {
  Container,
  TextTitle,
  ScrollCantainer
} from "./styles";
 
export default function ListaClientes({ route, navigation }) {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    StorageCliente.getClients().then(clients => setClients(clients));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextTitle >Lista de Clientes</TextTitle>
        <ScrollCantainer 
            contentContainerStyle={styles.itemsContainer}>
            { clients.map(client => {
              return <AppClientes key={client.id} id={client.id} client={'Nome: ' + client.name + ' - Email: ' + client.email + ' - Data nascimento: ' + client.birth} navigation={navigation} />
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
