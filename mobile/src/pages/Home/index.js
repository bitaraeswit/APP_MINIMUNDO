import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  Container,
  Button,
  ButtonText
} from "./styles";

export default function Home (){
  return (
    <Container>

    {/*
      Botão Comprar
   */}
      <Button>
        <TouchableOpacity>
        <ButtonText>
              <Text>Comprar</Text>
        </ButtonText>
        </TouchableOpacity>
      </Button>  
    </Container>
  );
}
