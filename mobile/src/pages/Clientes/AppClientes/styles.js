import styled from "styled-components/native";

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

export const IconEdit = styled.View`
  background-color: blue;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const IconDelete = styled.View`
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;