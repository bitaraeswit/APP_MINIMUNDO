import React from 'react';
import { TouchableOpacity, Alert} from 'react-native';
import StorageProduto from '../StorageProduto';

//estilização da página
import {
  Container,
  TextTitle,
  DeleteButton,
  EditButton,
  ButtonContainer,
  ButtonText
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

    async function handleEditPress(){ 
        const item = await StorageProduto.getItem(props.id);
        props.navigation.navigate("CadProdutos", item);
    }
    
    return (
        <Container>
          <TextTitle>{props.item}</TextTitle>
          <ButtonContainer>
            <DeleteButton>
              <TouchableOpacity onPress={handleDeletePress}>
                <ButtonText>X</ButtonText>
              </TouchableOpacity> 
            </DeleteButton>
            <EditButton>
              <TouchableOpacity onPress={handleEditPress}>
                <ButtonText>Y</ButtonText>
              </TouchableOpacity> 
            </EditButton>
          </ButtonContainer>
        </Container>
      );
}
