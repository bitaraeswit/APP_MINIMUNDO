import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  background-color: #3299CC;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
  background-color: #3299CC;
`;

export const TextTitle = styled.Text `
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ScrollContainer = styled.View `
  width: 100%;
  height: 90%;
  background-color: white;
  padding: 0 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ItemsContainer = styled.View `
  flex: 1;
  margin-top: 10px;
  padding: 20px;
  border-top-leftradius: 10px;
  border-top-right-radius: 10px;
  align-items: stretch;
  background-color: #fff;
`;