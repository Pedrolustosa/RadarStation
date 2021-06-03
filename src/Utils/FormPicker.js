import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../Utils/Dimentions';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const FormPicker = ({iconType, labelValue, ...rest}) => {
  const pickerStyle = {
    inputIOS: {
      color: 'black',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      padding: 10,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderColor: 'white',
    underline: {borderTopWidth: 0},
    icon: {
      padding: 2,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <RNPickerSelect
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
        value={labelValue}
        placeholder={{label: 'Escolha um gênero', value: null}}
        items={[
          {label: 'Masculino', value: 'Masculino'},
          {label: 'Feminino', value: 'Feminino'},
          {label: 'Outros', value: 'Outros'},
        ]}
        {...rest}
      />
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
