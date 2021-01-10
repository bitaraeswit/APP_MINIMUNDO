import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/EvilIcons';

//estilização da página
import {
  Container,
  Header,
  InputContainer,
  TextTitle,
  Button,
  ForgotLogin,
  ForgotLoginText,
  ButtonText
} from "./styles";

export default function Login() {
  const nav = useNavigation();

  function handleLogin() {
    nav.navigate('Home');
  }

  function handleRecuperaLogin() {
    Alert.alert('Página de cadastro!');
  }

  return (
    <KeyboardAvoidingView 
    style={{flex: 1, backgroundColor:"#fff"}}
    behavior={Platform.OS == 'ios' ? 'padding': undefined}
    enabled
    >
      <Container>
        <Header>
          <TextTitle>Aplicativo de Compras</TextTitle>
        </Header>
        <InputContainer>
          <Icon name="user" size={45} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Usuário"
          />
        </InputContainer>
        <InputContainer>
          <Icon name="lock" size={45} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Senha"
          />
        </InputContainer>

        <ForgotLogin>
          <ForgotLoginText onPress={handleRecuperaLogin}>
             Não é cadastrado?
             Clique aqui
          </ForgotLoginText>
        </ForgotLogin>

        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    </KeyboardAvoidingView>  
  );
}
