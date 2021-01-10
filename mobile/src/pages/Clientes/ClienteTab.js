import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListaClientes from './ListaClientes/ListaClientes';
import CadClientes from './CadClientes/CadClientes';
 
const {Navigator, Screen} = createBottomTabNavigator();

function ClienteTab(){
    return (
            <Navigator
                initialRouteName="ListaClientes"
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
                <Screen name="ListaClientes" component={ListaClientes}
                    options={{
                        tabBarLabel: "Clientes"
                    }}
                />
                <Screen name="CadClientes" component={CadClientes}
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
    );
}

export default ClienteTab;