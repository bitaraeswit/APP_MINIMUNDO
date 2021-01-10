import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListaCompras from './ListaCompras/ListaCompras';
import CadCompras from './CadCompras/CadCompras';

const {Navigator, Screen} = createBottomTabNavigator();
//tab da tela de compras
function ComprasTab(){
    return (
            <Navigator
                initialRouteName="ListaCompras"
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
                <Screen name="ListaCompras" component={ListaCompras}
                    options={{
                        tabBarLabel: "Compras"
                    }}
                />
                <Screen name="CadCompras" component={CadCompras}
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
    );
}

export default ComprasTab;