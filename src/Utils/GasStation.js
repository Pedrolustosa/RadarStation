import React, {Component} from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';

export default class GasStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      markers: [
        {
          coords: {latitude: -8.008248256471207, longitude: -34.87990779623561},
          title: 'Posto Petrobrás',
          description: 'Gasolina: R$ 4.37 | Alcóol: R$ 3.51',
        },
        {
          coords: {latitude: -8.0001097, longitude: -34.8484869},
          title: 'Sv Comércio de Petróleo Ltda',
          description:
            'Gasolina: R$ 4.37 | Etanol: R$ 3.69 | Diesel S10: R$ 3.47',
        },
        {
          coords: {latitude: -8.0089102, longitude: -34.8444891},
          title: 'Posto Cidade Patrimonio',
          description: 'Gasolina: R$ 4.49 | Etanol: R$ 3.49',
        },
        {
          coords: {latitude: -7.97952, longitude: -34.8390887},
          title: 'Posto Total - Azul 4',
          description: 'Gasolina: R$ 3.69',
        },
        {
          coords: {latitude: -7.97952, longitude: -34.8390887},
          title: 'Cemopel - Cm Petroleo Ltda',
          description: 'Gasolina: R$ 3.95 |  Etanol: R$ 2.95 | GNV: R$ 2.29',
        },
      ],
    };
  }

  render() {
    const {markers} = this.state;
    return (
      <View>
        {markers.map(marker => {
          return (
            <Marker
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}></Marker>
          );
        })}
      </View>
    );
  }
}
