import React, { useContext }  from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {
 const navigation = useNavigation();

 const { user, signOut } = useContext(AuthContext);

 return (
   <View>
       <Text>
         {user && user.nome}
       </Text>
       <Text onPress={ () => navigation.navigate('Registrar') } >
         <Text>Registrar gastos</Text>
       </Text>

       <TouchableOpacity onPress={ () => signOut()}>
         <Text>Sair</Text>
       </TouchableOpacity>
   </View>
  );
}