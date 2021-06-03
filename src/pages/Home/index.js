import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import GasStation from '../../Utils/GasStation';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
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
        <View style={styles.container}>
          <MapView
            style={styles.mapa}
            region={region}
            showsUserLocation
            loadingEnabled>
            <GasStation />
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
    height: 600,
    marginTop: 1,
    paddingTop: 1,
  },
});
