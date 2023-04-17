import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageSourcePropType, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { tutorials, Tutorial} from '../assets/data';

export default function Tutorials() {
  
const handlePress = (link: string) => {
  const url = `${link}`;
  Linking.openURL(url)
    .catch(() => {
      console.log(`Não foi possível abrir o link ${url}`);
    });
};

  const renderTutorial = (tutorial: Tutorial) => {
    return (
      <TouchableOpacity
        key={tutorial.id}
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => handlePress(tutorial.link)}
      >
        <Image
          source={tutorial.img}
          style={[styles.image, {width: tutorial.style.width, height: tutorial.style.height,}]}
        />
        <Text style={styles.title}>{tutorial.title}</Text>
        <Text style={styles.description}>{tutorial.description}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        {tutorials.map(renderTutorial)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10
  },
  card: {
    width: '48%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    marginBottom: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'sans-serif',
  },
});
