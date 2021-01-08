import AsyncStorage from '@react-native-async-storage/async-storage';


//Funcão responsável por pegar a lista de clientes no storage
function getClients(){
  return AsyncStorage.getItem('clients').then(response => {
      if(response)
        return Promise.resolve(JSON.parse(response));
      else
        return Promise.resolve([]);
    })
}

//funcao responsável por pegar um cliente no storage
async function getClient(id){
  const savedClients = await getClients();
  return savedClients.find(client => client.id === id);
}

//funcao salvar cliente no storage
async function saveClient(listClient, id){
  listClient.id = id ? id : new Date().getTime()
  const savedClients = await getClients();
  
  if(id){
    const index = await savedClients.findIndex(client => client.id === id);
    savedClients[index] = listClient;
  }
  else
    savedClients.push(listClient);

 return AsyncStorage.setItem('clients', JSON.stringify(savedClients));
}

//funcao deleta cliente no storage
async function deleteClient(id){
    let savedClients = await getClients();
    const index = await savedClients.findIndex(client => client.id === id);
    savedClients.splice(index, 1);
    return AsyncStorage.setItem('clients', JSON.stringify(savedClients));
}

module.exports = {
    saveClient,
    getClients,
    getClient,
    deleteClient
}