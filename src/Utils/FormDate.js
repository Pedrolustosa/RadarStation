import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../Utils/Dimentions';
import RNPickerSelectDate from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const FormDate = ({iconType, labelValue, ...rest}) => {
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
      <RNPickerSelectDate
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
        value={labelValue}
        placeholder={{label: 'Qual a sua Idade ?', value: null}}
        items={[
          {label: '18', value: '18'},
          {label: '19', value: '19'},
          {label: '20', value: '20'},
          {label: '21', value: '21'},
          {label: '22', value: '22'},
          {label: '23', value: '23'},
          {label: '24', value: '24'},
          {label: '25', value: '25'},
          {label: '26', value: '26'},
          {label: '27', value: '27'},
          {label: '28', value: '28'},
          {label: '29', value: '29'},
          {label: '30', value: '30'},
          {label: '31', value: '31'},
          {label: '32', value: '32'},
          {label: '33', value: '33'},
          {label: '34', value: '34'},
          {label: '35', value: '35'},
          {label: '36', value: '36'},
          {label: '37', value: '37'},
          {label: '38', value: '38'},
          {label: '39', value: '39'},
          {label: '40', value: '40'},
          {label: '41', value: '41'},
        ]}
        {...rest}
      />
    </View>
  );
};

export default FormDate;

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
