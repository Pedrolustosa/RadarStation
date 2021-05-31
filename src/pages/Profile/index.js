import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet} from 'react-native';
import Header from '../../Utils/Header';
import FormInput from '../../Utils/FormInput';
import FormButtonDelete from '../../Utils/FormButtonDelete';
import FormButtonSign from '../../Utils/FormButtonSign';

import {AuthContext} from '../../contexts/auth';

export default function Profile() {
  const navigation = useNavigation();

  const {user, signOut, DeleteAccount} = useContext(AuthContext);

  return (
    <View>
      <Header />
      <View style={{fontSize: 16, margin: 25, alignItems: 'center'}}>
        <Image source={require('../../assets/Logo.png')} />

        <FormInput iconType="user" editable={false} selectTextOnFocus={false}>
          {user && user.name}
        </FormInput>
        <FormInput iconType="at" editable={false} selectTextOnFocus={false}>
          {user && user.email}
        </FormInput>
        <FormInput
          iconType="calendar-o"
          editable={false}
          selectTextOnFocus={false}>
          {user && user.age}
        </FormInput>
        <FormInput
          iconType="venus-mars"
          editable={false}
          selectTextOnFocus={false}>
          {user && user.gender}
        </FormInput>
      </View>

      <View style={styles.container}>
        <FormButtonDelete
          onPress={() => DeleteAccount()}
          iconType="trash-o"
          buttonTitle="Excluir conta"
        />
        <FormButtonSign
          onPress={() => signOut()}
          iconType="sign-out"
          buttonTitle="Sair"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 5,
  },
});
