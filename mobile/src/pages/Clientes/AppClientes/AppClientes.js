import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import StorageCliente from '../StorageCliente';

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
        <View style={styles.container}>
          <Text style={styles.textClient}>{props.client}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={handleDeletePress}>
                  <Text>X</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
                style={styles.editButton} 
                onPress={handleEditPress}>
                  <Text>Y</Text>
            </TouchableOpacity> 
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textClient: {
        fontSize: 20,
    }
  });