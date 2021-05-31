import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../../Utils/Header';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import FormButton from '../../Utils/FormButton';

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
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
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
                      latitude: -8.00837,
                      longitude: -34.87994,
                    },
                  });
                }}>
                <Text style={styles.localText}>Posto Petrobrás</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <FormButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapa: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 380,
    marginTop: 15,
    paddingTop: 15,
  },
  box: {
    position: 'absolute',
    top: 10,
    margin: 10,
    height: 50,
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  localBtn: {
    backgroundColor: '#FF0000',
    height: 35,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  localText: {
    color: '#FFF',
  },
});
