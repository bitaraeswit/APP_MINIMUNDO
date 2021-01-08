import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
//Estilização pagina Home
export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

//Estilização Botão Comprar
export const Button = styled(RectButton) `
  width: 70%;
  height: 45px;
  background: #3299CC;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

`;

//Estilização Texto do Botão
export const ButtonText = styled.Text `
 color: #fff;


`;


