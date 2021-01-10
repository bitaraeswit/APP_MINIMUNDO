import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #3299CC;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
  background-color: #3299CC;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const InputContainer = styled.View `
  flex: 1;
  width: 90%;
  padding: 20px;
  align-items: stretch;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Input = styled.TextInput `
  margin-top: 10px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  padding-horizontal: 24px;
  font-size: 16px;
  align-items: stretch;
`;

export const Button = styled(RectButton) `
  margin-top: 10px;
  height: 60px;
  background-color: #3299CC;
  border-radius: 10px;
  padding-horizontal: 24px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  elevation: 20;
  shadow-opacity: 20;
  shadow-color: #ccc;

`;

export const ButtonContainer = styled.View ``;

export const ButtonText = styled.Text `
  margin-left: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;

`;