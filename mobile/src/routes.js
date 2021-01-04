import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Produtos from './pages/Produtos';
import Compras from './pages/Compras';

import CustomDrawer from './components/CustomDrawer';

const Routes  = createAppContainer(
  createDrawerNavigator ({
    Home,
    Clientes,
    Produtos,
    Compras
  }, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer
  })
);

export default Routes;