import React, { useContext } from 'react';
import { View, Text, Button  } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const { user, signOut  } = useContext(AuthContext);

 return (
   <View>
       <Text>Home</Text>
       <Text>{ user && user.name }</Text>
       <Text>{ user && user.email }</Text>
       <Text>{ user && user.age }</Text>
       <Text>{ user && user.gender }</Text>

       <Button
       title="Sair da conta"
       onPress={ () => signOut() }
       />
   </View>
  );
}