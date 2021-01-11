import React, {useState, useEffect} from 'react';
import {ScrollView , StatusBar} from 'react-native';
import AppProdutos from '../AppProduto/AppProdutos';
import StorageProduto from '../StorageProduto';

//estilização da pagina
import {
  Container,
  TextContainer,
  TextTitle,
  ScrollContainer
} from "./styles";
 
export default function ListaProdutos({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  //busca os produtos do storage na função getItem para exibilos na lista
  useEffect(() => {
    StorageProduto.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <Container>
        <StatusBar style="light" />
        <TextContainer>
          <TextTitle>Lista de Produtos</TextTitle>
        </TextContainer>
          <ScrollContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
              { items.map(item => { //map percorre e exibe os itens
                return <AppProdutos key={item.id} id={item.id} item={'Categoria: ' + item.categoriaProd +"\n" + 'Item: '+ item.nome+"\n" + 'Quantidade: ' + item.quantidade +"\n" + 'Unidade: ' + item.unidade } navigation={navigation} />
              }) }    
            </ScrollView>
          </ScrollContainer>  
    </Container>
  );
}