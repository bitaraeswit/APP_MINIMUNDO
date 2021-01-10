import AsyncStorage from '@react-native-async-storage/async-storage';


//Funcão responsável por pegar a lista de compras no storage
function getPurchases(){
  return AsyncStorage.getItem('purchases').then(response => {
      if(response)
        return Promise.resolve(JSON.parse(response));
      else
        return Promise.resolve([]);
    })
}

//funcao responsável por pegar uma compra no storage (utilizada na alteração)
async function getPurchase(id){
  const savedPurchases = await getPurchases();
  return savedPurchases.find(purchase => purchase.id === id);
}

//funcao salvar compra no storage
async function savePurchase(listPurchase, id){
  listPurchase.id = id ? id : new Date().getTime()
  const savedPurchases = await getPurchases();
  
  if(id){
    const index = await savedPurchases.findIndex(purchase => purchase.id === id);
    savedPurchases[index] = listPurchase;
  }
  else
  savedPurchases.push(listPurchase);

 return AsyncStorage.setItem('purchases', JSON.stringify(savedPurchases));
}

//funcao deleta compra no storage
async function deletePurchase(id){
    let savedPurchases = await getPurchases();
    const index = await savedPurchases.findIndex(purchase => purchase.id === id);
    savedPurchases.splice(index, 1);
    return AsyncStorage.setItem('purchases', JSON.stringify(savedPurchases));
}
//exportação das funções a serem utilizadas nas outras páginas
module.exports = {
    savePurchase,
    getPurchases,
    getPurchase,
    deletePurchase
}