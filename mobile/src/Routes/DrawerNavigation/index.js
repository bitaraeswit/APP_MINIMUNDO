import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../../pages/Home';
import Clientes from '../../pages/Clientes/ClienteTab';
import Produtos from '../../pages/Produtos/ProdutoTab';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Clientes" component={Clientes} />
      <Drawer.Screen name="Produtos" component={Produtos} />
    </Drawer.Navigator>
  );
}

export default Routes;




// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import Home from '../../pages/Home';
// import Clientes from '../../pages/Clientes/ClienteTab';
// import Produtos from '../../pages/Produtos/ProdutoTab';

// import CustomDrawer from '../../components/CustomDrawer';

// const Routes  = createAppContainer(
//   createDrawerNavigator ({
//     Home,
//     Clientes,
//     Produtos
//   }, {
//     initialRouteName: 'Home',
//     contentComponent: CustomDrawer
//   })
// );

// export default Routes;