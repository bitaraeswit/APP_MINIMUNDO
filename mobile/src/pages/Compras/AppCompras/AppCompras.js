import React from 'react';
import { TouchableOpacity, Alert} from 'react-native';
import StorageCompras from '../StorageCompras';

import Icon from 'react-native-vector-icons/Feather';

//estilização da página
import {
  Container,
  TextTitle,
  ButtonContainer,
  IconDelete,
  IconEdit
} from "./styles";

export default function AppCompras(props){
    //verifica se o usuário deseja mesmo excluir a compra
    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir esta compra?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                  StorageCompras.deleteItem(props.id)
                            .then(response => props.navigation.navigate("ListaCompras", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 
    //busca a compra no storage para editá-la
    async function handleEditPress(){ 
        const item = await StorageCompras.getItem(props.id);
        props.navigation.navigate("CadCompras", item);
    }
    
    return (
        <Container>
          <TextTitle>{props.item}</TextTitle>
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