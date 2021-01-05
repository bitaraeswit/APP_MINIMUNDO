# APP_MINIMUNDO
Aplicativo de compras online


O aplicativo a ser desenvolvido é um aplicativo simples de cadastro de compras para um pequeno comércio
local que está começando a informatizar seu processo de vendas, portanto o aplicativo segue requisitos bem
resumidos. Para isso ele deve permitir que o usuário faça o cadastro de clientes, produtos e realize compras.
Tela inicial
Na tela inicial do aplicativo deve ser mostrado dois labels e um botão para cadastro de compra. Um label irá
conter o nome do cliente com maior número de compras nos últimos 15 dias, o outro label irá conter o
nome do produto mais vendido no mês atual e o botão servirá para acessar a tela de compra.
Menu lateral
Acessando um menu lateral(pode ser drawer navigation) o usuário deve poder cadastrar clientes e produtos.
Na tela de cadastro de clientes o usuário irá inserir o nome, email e data de nascimento. Na tela de cadastro
de produtos o usuário irá inserir o nome do produto, quantidade em estoque e unidade de venda(Ex: Un, Kg,
L ...). As duas telas de cadastros devem conter um CRUD completo(Create, Read, Update and Delete),
portanto uma listagem de itens será necessária.
Cadastro de compras
A tela de cadastro de compra será acessada pela tela principal ao clicar no botão comprar. Na tela de
cadastro de compras o usuário deve selecionar um cliente cadastrado e um produto vendido. É importante
que o usuário saiba a unidade utilizada no cadastro do produto. Para finalizar a compra ele deve informar a
quantidade do produto que foi comprado, a data da compra e um endereço para entrega, com: bairro, rua e
número. Lembre-se que é um aplicativo para um comércio local, não se preocupe com cadastro de cidades
ou estados.
● Só será permitido compras que atendam ao estoque existente de cada produto.
● Na versão inicial do aplicativo será necessário a inserção de apenas um item por compra.
Atividades extras
1. Para efetuar uma compra o cliente precisa ser maior que 18 anos. Caso ele não tenha 18 anos ele
precisará ser vinculado a um cliente maior que 18 anos. Para isso será preciso adicionar um campo
para vincular cliente responsável no cadastro de cliente e uma validação na hora da compra para
não permitir cadastrar uma compra para um cliente menor de 18 anos sem um cliente maior de 18
anos vinculado como responsável.
2. Um produto poderá ser vinculado a uma categoria como frios, produto de higiene pessoal, produto
de vestuário e etc.
3. Poderá ser criada uma tela de login para os usuários, com cadastro de senha e outras funções que se
façam necessárias.
