import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function CreditsScreen({ navigation }: CreditsScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/Ciencia_da_Computacao.jpg')}
          style={{ width: 350, height: 100 }}
        />
      </View>

      <View style={styles.separator} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alunos:</Text>
        <Text style={styles.text}>Gabriel de Brito Souza</Text>
        <Text style={styles.text}>Gabriel Massau Kimura da Silva</Text>
        <Text style={styles.text}>João Pedro Lopes Lenhato</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professor(a) colabolador(a):</Text>
        <Text style={styles.text}>Profª. Dra. Marcia Aparecida Nuevo Gatti</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professor(a) responsável:</Text>
        <Text style={styles.text}>Prof. Dr. Elvio Gilberto da Silva</Text>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 60,
    marginHorizontal: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 20,
    width: '100%',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CreditsScreen;
