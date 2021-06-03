import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet} from 'react-native';
import FormInput from '../../Utils/FormInput';
import FormButtonDelete from '../../Utils/FormButtonDelete';
import FormButtonSign from '../../Utils/FormButtonSign';
import {Avatar} from 'react-native-elements';

import {AuthContext} from '../../contexts/auth';

export default function Profile() {
  const navigation = useNavigation();

  const {user, signOut, DeleteAccount} = useContext(AuthContext);

  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Avatar
          rounded
          source={{
            uri: 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
          }}
          size="xlarge"
          activeOpacity={0.2}
          containerStyle={{marginTop: 10}}></Avatar>
        <View style={{marginRight: 30, marginLeft: 30}}>
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
    padding: 30,
    paddingTop: 1,
  },
});
