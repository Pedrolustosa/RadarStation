import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const Header = ({}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
       <TouchableOpacity 
            style={styles.ButtonMenu}
            onPress={ () => navigation.toggleDrawer() }>
        <AntDesign name="navicon" color="#000" size={30} />
       </TouchableOpacity>
   </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    Container : {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 15,
    width: '100%',
    height: 25
  },
  ButtonMenu : {
    justifyContent: 'center',
    alignItems: 'center'
  }
});