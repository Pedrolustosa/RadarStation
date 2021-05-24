import React, { useContext }  from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {
 const navigation = useNavigation();

 const { user, signOut } = useContext(AuthContext);

 return (
   <View style={{marginTop: 50}}>
      <View style={{fontSize: 16, margin: 25, alignItems: 'center'}}>
      <Image
        source={require('../../assets/Logo.png')}
      />
       <Text>Nome: { user && user.name }</Text>
       <Text>Email: { user && user.email }</Text>
       <Text>Idade: { user && user.age }</Text>
       <Text>Genêro:{ user && user.gender }</Text>
      </View>

       <Text onPress={ () => navigation.navigate('Registrar') } >
         <Text>Registrar gastos</Text>
       </Text>

       <TouchableOpacity
       style={{
         margin: 36,
         borderRadius: 8,
         backgroundColor: 'red',
         borderStyle: 'solid',
         alignItems: 'center'
        }} 
       onPress={ () => signOut()}>
         <Text style={{color: '#fff', fontSize: 18}}>Sair</Text>
       </TouchableOpacity>
   </View>
  );
}