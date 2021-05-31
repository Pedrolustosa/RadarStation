import React, {useState, useContext} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FormInput from '../../Utils/FormInput';
import FormButtonSign from '../../Utils/FormButtonSign';
import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.text}>Radar Station</Text>

      <FormInput
        labelValue={email}
        value={email}
        placeholderText="Email"
        iconType="at"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setEmail(text)}
      />

      <FormInput
        labelValue={password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <FormButtonSign
        onPress={handleLogin}
        iconType="sign-in"
        buttonTitle="Sign In"
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Criar um conta!</Text>
      </TouchableOpacity>
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
    fontSize: 21,
    marginTop: 16,
    color: '#131313',
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
