import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import getPixel from '../../Utils/utils';

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
            latitudeDelta: 0.0015,
            longitudeDelta: 0.00121,
          },
        });
      },
      () => {}, //Erro
      {
        timeout: 3000,
        enableHighAccuracy: true,
        maximumAge: 2000,
      },
    );
  }

  render() {
    const {region} = this.state;

    return (
      <View style={styles.container}>
        <MapView
          ref={map => {
            this.map = map;
          }}
          style={styles.mapa}
          region={region}
          loadingEnabled
          showsUserLocation>
          {this.state.destLocation && (
            <MapViewDirections
              origin={this.state.region}
              destination={this.state.destLocation}
              apikey="AIzaSyDEkSXnr0vIjp8Jf_V2ydSOD2tpS5ZxlJU"
              strokeWidth={5}
              strokeColor="#000"
              onReady={result => {
                this.map.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixel(50),
                    left: getPixel(50),
                    top: getPixel(50),
                    bottom: getPixel(50),
                  },
                });
              }}
            />
          )}
        </MapView>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.box}>
          <View style={styles.localView}>
            <TouchableOpacity
              style={styles.localBtn}
              onPress={() => {
                this.setState({
                  destLocation: {
                    latitude: -8.0085,
                    longitude: -34.87994,
                  },
                });
              }}>
              <Text style={styles.localText}>Posto Petrobrás</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    top: 30,
    margin: 10,
    height: 70,
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  localBtn: {
    backgroundColor: '#2ecc71',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  localText: {
    color: '#FFF',
  },
});
