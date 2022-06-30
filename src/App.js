import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const COLOR_GITHUB = '#010409';
const COLOR_FONT_GITHUB = '#C9D1D9';
const COLOR_DARK_FONT_GITHUB = '#4F565E';
const URL_MY_GITHUB = 'https://github.com/bimsant';
const IMAGE_PROFILE_GITHUB = 'https://avatars.githubusercontent.com/u/100208061?v=4';

const App = () => {
  const HANDLE_PRESS_GO_TO_GITHUB = () => {
    const RES = Linking.canOpenURL(URL_MY_GITHUB);
    if (RES) {
      Linking.openURL(URL_MY_GITHUB);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={COLOR_GITHUB} barStyle='light-content'/>
      <View style={style.content}> 
          <Image 
            style={style.avatar} 
            source={{uri: IMAGE_PROFILE_GITHUB}}
          />

          <Text style={[style.defaultText, style.name]}> Beatriz Santos </Text>
          <Text style={[style.defaultText, style.nickname]}> bimsant </Text>
          <Text style={[style.defaultText, style.description]}> 
            Estudante universitária, atualmente no 6° semestre de Sistemas de Informação na instituição Impacta de Tecnologia. 
          </Text>
      </View>
      <Pressable onPress={HANDLE_PRESS_GO_TO_GITHUB}>
      <View style={[style.button, style.defaultText]}>
        <Text style={[style.textButton, style.defaultText]}> Open in GitHub </Text>
      </View>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR_GITHUB,
    flex: 1, // Vai preencher toda a tela.
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  defaultText: {
    color: COLOR_FONT_GITHUB,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: COLOR_DARK_FONT_GITHUB,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLOR_DARK_FONT_GITHUB,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },

});

// O SafeAreaView vai ajudar em telefones com o iphone a n ficar naquela área em cima to auto-falante.
// O basStyle='dar-content' vai deixar os icones do telefone preto.
// O felxBox alinha os elementos a tela.