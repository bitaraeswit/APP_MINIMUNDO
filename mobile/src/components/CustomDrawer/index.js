import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';


function CustomDrawer({...props}) {
   return(
      <View>
        <DrawerNavigatorItems {...props} /> 
      </View>
   );
} 

export default CustomDrawer; 