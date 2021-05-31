import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './Dimentions';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const FormButtonSign = ({buttonTitle, iconType, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      horizontal={true}
      {...rest}>
      <AntDesign name={iconType} size={20} color="#fff">
        <Text style={styles.buttonText}> {buttonTitle}</Text>
      </AntDesign>
    </TouchableOpacity>
  );
};

export default FormButtonSign;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2ecc71',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
