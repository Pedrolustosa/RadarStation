import React, {useState, useContext} from 'react';
import {StyleSheet, ScrollView, Platform, Text} from 'react-native';
import FormInput from '../../Utils/FormInput';
import FormButtonSign from '../../Utils/FormButtonSign';
import RNPickerSelect from '../../Utils/FormPicker';
import RNPickerSelectDate from '../../Utils/FormDate';

import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUp} = useContext(AuthContext);

  function handleSingUp() {
    signUp(email, password, name, age, gender);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled>
      <Text style={{alignItems: 'center', fontSize: 36, marginBottom: 15}}>
        Bem-Vindo
      </Text>

      <FormInput
        labelValue={name}
        placeholder="Nome"
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        iconType="user"
        onChangeText={text => setName(text)}
      />

      <RNPickerSelectDate
        iconType="birthday-cake"
        onValueChange={itemValue => setAge(itemValue)}
        labelValue={age}
        gender={age}
      />

      <RNPickerSelect
        iconType="venus-mars"
        onValueChange={itemValue => setGender(itemValue)}
        labelValue={gender}
        gender={gender}
      />

      <FormInput
        labelValue={email}
        placeholder="E-mail"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        iconType="at"
        onChangeText={text => setEmail(text)}
      />

      <FormInput
        labelValue={password}
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        secureTextEntry={true}
        iconType="lock"
        onChangeText={text => setPassword(text)}
      />

      <FormButtonSign
        onPress={handleSingUp}
        iconType="plus-circle"
        buttonTitle="Criar Conta"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});
