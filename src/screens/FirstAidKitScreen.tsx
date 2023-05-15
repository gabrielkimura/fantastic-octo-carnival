import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const FirstAidKitScreen: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Kit de Primeiros Socorros</Text>

        <Text style={styles.subtitle}>Itens Obrigatórios:</Text>
        <Text>- Mochila para acondicionamento do kit</Text>
        <Text>- Tesoura sem ponta</Text>
        <Text>- Caixas de luvas de procedimentos nos tamanhos P, M e G</Text>
        <Text>- Pinça</Text>
        <Text>- 1 caixa de máscaras descartáveis</Text>
        <Text>- Termômetro para aferição de temperatura corporal</Text>
        <Text>- Óculos de proteção</Text>
        <Text>- Lanterna</Text>

        <Text style={styles.subtitle}>Itens de Trauma:</Text>
        <Text>- 10 pacotes de gaze</Text>
        <Text>- 1 rolo de esparadrapo</Text>
        <Text>- 10 compressas cirúrgicas</Text>
        <Text>- Bolsa de gelo</Text>
        <Text>- 10 ataduras de crepom de 15 cm</Text>
        <Text>- Curativos do tipo band-aid de diferentes tamanhos</Text>
        <Text>- 2 torniquetes de extremidade na cor laranja de algum fabricante oficial</Text>
        <Text>- Clorexidina aquosa (antisséptico)</Text>
        <Text>- 2 talas de papelão P</Text>
        <Text>- 1 rolo de micropore</Text>
        <Text>- 2 talas de papelão M</Text>
        <Text>- 2 talas de papelão G</Text>
        <Text>- 1 rolo de plástico filme transparente</Text>
        <Text>- 20 frascos de 20 ml de solução fisiológica</Text>

        <Text style={styles.subtitle}>Itens Opcionais SBV:</Text>
        <Text>- Máscara de bolso adulto</Text>
        <Text>- BVM neonatal</Text>
        <Text>- Máscara de bolso neonatal</Text>
        <Text>- Manta aluminizada</Text>
        <Text>- BVM adulto</Text>
        <Text>- BVM pediátrico</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default FirstAidKitScreen;
