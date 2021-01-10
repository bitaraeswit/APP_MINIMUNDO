import React from 'react';
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Button,
  ButtonText
} from "./styles";

export default function Home (){
  const nav = useNavigation();

  return (
    <Container>
      <Button onPress={() => {
       nav.navigate('CadCompras');
     }}
      >
        <ButtonText>
              Cadastro de Compras
        </ButtonText>
      </Button>  
    </Container>
  );
}
