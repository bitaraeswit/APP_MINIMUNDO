import React, { useState }  from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

import {
  Container,
  UserArea,
  UserName,
  UserEmail,
  Avatar
} from "./styles";

function CustomDrawer({...props}) {
    const [user, setUser] = useState([
      {
        id: "1",
        avatar: require("../../assets/user.png"),
        name: "Witally Lana Bitarães",
        email: "witally_bitaraes@hotmail.com"
      }
    ]);

   return(
      <Container render>
        
        <UserArea>
           <Avatar source={require("../../assets/user.png")} />
           <UserName>Witally Lana Bitarães</UserName>
           <UserEmail>witally_bitaraes@hotmail.com</UserEmail>
         </UserArea>
         
         <DrawerNavigatorItems {...props} /> 
      </Container>
   );
} 

export default CustomDrawer; 