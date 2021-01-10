import React, {useState, useEffect} from 'react';
import { ScrollView, StatusBar} from 'react-native';
import AppClientes from '../AppClientes/AppClientes';
import StorageCliente from '../StorageCliente';

import {
  Container,
  TextContainer,
  TextTitle,
  ScrollContainer,
} from "./styles";
 
export default function ListaClientes({ route, navigation }) {
  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    StorageCliente.getClients().then(clients => setClients(clients));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextContainer>
          <TextTitle>Lista de Clientes</TextTitle>
        </TextContainer>
        <ScrollContainer>
          <ScrollView showsVerticalScrollIndicator={false}>
            { 
              clients.map(client => (
                  <AppClientes key={client.id} id={client.id} client={'Nome: ' + client.name + "\n"+'Email: ' + client.email+"\n"+'Data nascimento: ' + client.birth} navigation={navigation} />
              )) 
            }
          </ScrollView>
        </ScrollContainer>
    </Container>
  );
}