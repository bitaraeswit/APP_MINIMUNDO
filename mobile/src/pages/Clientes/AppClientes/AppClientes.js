import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import StorageCliente from '../StorageCliente';

import Icon from 'react-native-vector-icons/Feather';

//estilização da página
import {
  Container,
  TextTitle,
  ButtonContainer,
  IconEdit,
  IconDelete
} from "./styles";

export default function AppClientes(props){

    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este cliente?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                  StorageCliente.deleteClient(props.id)
                            .then(response => props.navigation.navigate("ListaClientes", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 

    async function handleEditPress(){ 
        const client = await StorageCliente.getClient(props.id);
        props.navigation.navigate("CadClientes", client);
    }
    
    return (
        <Container >
          <TextTitle>{props.client}</TextTitle>
          <ButtonContainer>
            <TouchableOpacity onPress={handleDeletePress}>
                  <IconDelete>
                    <Icon name="x-octagon" size={25} color="#fff"/>
                  </IconDelete>
            </TouchableOpacity> 
            <TouchableOpacity onPress={handleEditPress}>
                <IconEdit>
                  <Icon name="edit" size={25} color="#fff"/>
                </IconEdit>
            </TouchableOpacity> 
          </ButtonContainer>
        </Container>
      );
}