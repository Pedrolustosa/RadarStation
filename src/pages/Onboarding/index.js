import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('SignIn')}
      onDone={() => navigation.navigate('SignIn')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../../assets/Logo.png')} />,
          title: 'BEM-VINDO',
          subtitle:
            'Vamos ajudar você, a encontrar o posto de combustível mais próximo com o menor preço.',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/Logo.png')} />,
          title: 'AUXILIE A MELHORAR O RADARSTATION',
          subtitle:
            'Avalie os postos e informe o valor do combustível, para que, o RadarStation fique sempre atualizado.',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../../assets/Logo.png')} />,
          title: 'O RADARSTATION',
          subtitle:
            'Agora é com você!, use e abuse para economizar o máximo possível com o seu combustível!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
