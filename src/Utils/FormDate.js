import React from 'react';
import {View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../Utils/Dimentions';
import DatePicker from 'react-native-datepicker';

const FormDate = ({labelValue, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <DatePicker
        borderWidth={0}
        value={labelValue}
        style={styles.input}
        format="DD-MM-YYYY"
        minDate="01-01-1900"
        maxDate="01-01-3000"
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
  input: {
    padding: 2,
    flex: 1,
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
