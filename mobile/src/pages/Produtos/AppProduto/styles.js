import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #fff;
    margin-top: 20px;
`;

export const TextTitle = styled.Text `
  font-size: 20px;
`;

export const ButtonContainer = styled.View `
  flex-direction: row-reverse;
  align-items: flex-end;
  border-bottom-width: 1px;
  border-bottom-color: #CCC;
  padding-bottom: 10px;
  margin-top: 10px;
`;

export const DeleteButton = styled(RectButton) `
  margin-left: 10px;
  height: 40px;
  width: 40px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  elevation: 10px;
  shadow-opacity: 10px;
  shadow-color: #ccc;
  align-items: center;
`;

export const EditButton = styled(RectButton) `
    margin-left: 10px;
    height: 40px;
    background-color: blue;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
    elevation: 10px;
    shadow-opacity: 10px;
    shadow-color: #ccc;
    align-items: center;

`;

export const ButtonText = styled.Text `
  color: #fff;
  font-weight: bold;

`;