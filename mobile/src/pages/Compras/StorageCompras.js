import AsyncStorage from '@react-native-async-storage/async-storage';


//Funcão responsável por pegar a lista de compras no storage
function getItems(){
  return AsyncStorage.getItem('items').then(response => {
      if(response)
        return Promise.resolve(JSON.parse(response));
      else
        return Promise.resolve([]);
    })
}

//funcao responsável por pegar uma compra no storage (utilizada na alteração)
async function getItem(id){
  const savedItems = await getItems();
  return savedItems.find(item => item.id === id);
}

//funcao salvar compra no storage
async function saveItem(listPurchase, id){
  listPurchase.id = id ? id : new Date().getTime()
  const savedItems = await getItems();
  
  if(id){
    const index = await savedItems.findIndex(item => item.id === id);
    savedItems[index] = listPurchase;
  }
  else
    savedItems.push(listPurchase);

 return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}

//funcao deleta compra no storage
async function deleteItem(id){
    let savedItems = await getItems();
    const index = await savedItems.findIndex(item => item.id === id);
    savedItems.splice(index, 1);
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}
//exportação das funções a serem utilizadas nas outras páginas
module.exports = {
    saveItem,
    getItems,
    getItem,
    deleteItem
}