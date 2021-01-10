import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListaProdutos from './ListaProdutos/ListaProdutos';
import CadProdutos from './CadProdutos/CadProdutos';
 
const {Navigator, Screen} = createBottomTabNavigator();
//tab da tela de produtos
function ProdutoTab(){
    return (
            <Navigator
                initialRouteName="ListaProdutos"
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginLeft: 16
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#c1bccc',
                    activeTintColor: '#32264d'
                }}
            >
                <Screen name="ListaProdutos" component={ListaProdutos}
                    options={{
                        tabBarLabel: "Produtos"
                    }}
                />
                <Screen name="CadProdutos" component={CadProdutos}
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
    );
}

export default ProdutoTab;