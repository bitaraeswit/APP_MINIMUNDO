import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #f5f5f5;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View `
    background-color: #f5f5f5;
    height: 60px;
    align-items: center;
    border-bottom-width: 0.5px;
    border-color: #3299CC;
    padding: 10px 20px;


`;

export const TextTitle = styled.Text `
    font-size: 24px;
    font-weight: bold;
    color: #484848;
    width: 100%;

`;

export const InputContainer = styled.View `
    width: 80%;
    height: 60px;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-color: #3299CC;
    border-radius: 10px;
    align-self: center;
    padding-horizontal: 15px;
    margin-top: 50px;
`;

export const ForgotLogin = styled.View `
   margin: 20px 10px 0 10px;

`;

export const ForgotLoginText = styled.Text ` 
  font-size: 15px;
  color: #3299CC;
  font-weight: bold;

`;

export const Button = styled(RectButton) `
    width: 274px;
    height: 55px;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: #3299CC;
    border-radius: 50px;
    margin-top: 20px;
`;

export const ButtonText = styled.Text `
  font-size: 19px;
  color: #FFF;
  font-weight: bold;
`;
