import React, { useState }  from 'react';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

import {
  Container,
  UserArea,
  UserName,
  UserEmail,
  Avatar
} from "./styles";

function CustomDrawer({...props}) {
    const [user, setUser] = useState(
      {
        id: "1",
        avatar: require("../../assets/user.png"),
        name: "Witally Lana Bitarães",
        email: "witally_bitaraes@hotmail.com"
      }
    );

   return(
      <Container>       
        <UserArea >
           <Avatar source={user.avatar} />   
           <UserName>{user.name}</UserName> 
           <UserEmail>{user.email}</UserEmail>  
         </UserArea>
         
         <DrawerNavigatorItems {...props} /> 
      </Container>
   );
} 

export default CustomDrawer; 