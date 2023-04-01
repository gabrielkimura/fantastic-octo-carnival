import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Lei Lucas</Text>
        <Text style={styles.text}>
            A Lei Lucas é uma lei federal brasileira que foi criada em homenagem ao
            menino Lucas Begalli Zamora. Lucas faleceu em 2018, aos 10 anos de
            idade, após se engasgar com um pedaço de salsicha durante um passeio
            escolar em Campinas, São Paulo.
        </Text>
        <Text style={styles.text}>
            A Lei Lucas estabelece que todos os estabelecimentos de ensino do país,
            sejam eles públicos ou privados, devem capacitar seus funcionários para
            prestarem os primeiros socorros em caso de emergência médica. Além
            disso, a lei determina que as escolas devem manter em local de fácil
            acesso um kit de primeiros socorros, além de afixar em suas dependências
            cartazes com informações sobre como proceder em casos de emergência.
        </Text>
        <Text style={styles.text}>
            A Lei Lucas tem como objetivo evitar que tragédias como a que aconteceu
            com o Lucas se repitam. Por isso, é importante que todos conheçam a lei
            e saibam como agir em casos de emergência médica, principalmente nas
            escolas, onde muitas vezes as crianças passam a maior parte do seu dia.
        </Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFF',
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    marginTop: 5,
    },
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
    },
    text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
    color: '#444',
    },
});
