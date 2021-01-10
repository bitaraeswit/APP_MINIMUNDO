import React from 'react';
import { TouchableOpacity, Alert} from 'react-native';
import StorageProduto from '../StorageProduto';

import Icon from 'react-native-vector-icons/Feather';

//estilização da página
import {
  Container,
  TextTitle,
  ButtonContainer,
  IconDelete,
  IconEdit
} from "./styles";


export default function AppProdutos(props){
    //ao pressionar o botão, o app solicita confirmação para excluir o registro
    function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este produto?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                  StorageProduto.deleteItem(props.id)//deleta item da lista
                            .then(response => props.navigation.navigate("ListaProdutos", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 
    //busca o produto no storage para editá-lo
    async function handleEditPress(){ 
        const item = await StorageProduto.getItem(props.id);
        props.navigation.navigate("CadProdutos", item);
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