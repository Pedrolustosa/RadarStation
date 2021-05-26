import React, { useContext } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Header from '../../Utils/Header';

import { AuthContext } from '../../contexts/auth';
import { Marker } from 'react-native-maps';

export default function Home() {

 return (
   <View>
     <Header/>
      <MapView
      style={{width: 380, height: 350, marginTop: 20, margin: 15}}
        initialRegion={{
          latitude:-23.5492243,
          longitude:-46.5813785,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
   </View>
  );
}