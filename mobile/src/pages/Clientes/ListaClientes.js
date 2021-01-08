import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView , StatusBar} from 'react-native';
import AppClientes from './AppClientes';
import StorageCliente from './StorageCliente';
 
export default function ListaClientes({ route, navigation }) {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    StorageCliente.getClients().then(clients => setClients(clients));
  }, [route]); 

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Clientes</Text>
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { clients.map(client => {
              return <AppClientes key={client.id} id={client.id} client={'Nome: ' + client.name + ' - Email: ' + client.email + ' - Data nascimento: ' + client.birth} navigation={navigation} />
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
