/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { View, Text, Button  } from 'react-native';
import MapView from 'react-native-maps';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const { signOut } = useContext(AuthContext);

 return (
   <View>
       <Text>Home a</Text>

      <MapView
      style={{width: 350, height: 350}}
        initialRegion={{
          latitude:-23.5492243,
          longitude:-46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />

       <Button
       title="Sair da conta"
       onPress={ () => signOut() }
       />
   </View>
  );
}