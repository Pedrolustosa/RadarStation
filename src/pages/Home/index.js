import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../../Utils/Header';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destLocation: null,
    };
  }

  async componentDidMount() {
    await Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          },
        });
      },
      () => {}, //ERRO
      {
        timeout: 2000,
        maximumAge: 1000,
        enableHighAccuracy: true,
      },
    );
  }

  render() {
    const {region} = this.state;

    return (
      <View>
        <Header />
        <View style={styles.container}>
          <MapView
            ref={map => {
              this.map = map;
            }}
            style={styles.mapa}
            region={region}
            showsUserLocation
            loadingEnabled>
            {this.state.destLocation && (
              <MapViewDirections
                origin={region}
                destination={this.state.destLocation}
                apikey="AIzaSyAWY5XcfpYPoeI-O1_a2McjSSgyrKamISk"
                strokeWidth={5}
                strokeColor="#000"
              />
            )}
            <Marker
              coordinate={{
                latitude: -8.0083728,
                longitude: -34.8798883,
              }}
              title="Posto Petrobrás"
              description="Gasolina: R$ 4.56, Alcóol: R$ 3.56"
            />
            <Marker
              coordinate={{
                latitude: -8.00563,
                longitude: -34.884951,
              }}
              title="Posto NVC III"
              description="Comum: R$ 4.17 | Etanol: R$ 3.17"
            />
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapa: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 325,
    marginTop: 15,
    paddingTop: 15,
  },
});
