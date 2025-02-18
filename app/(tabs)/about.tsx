


import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        StickerSmash is a fun and interactive app that allows you to create and share custom stickers with your friends. 
        Our mission is to bring joy and creativity to your conversations. 
        Whether you're looking to express yourself or just have some fun, StickerSmash has got you covered!
      </Text>
      <Text style={styles.footer}>© 2025 StickerSmash Inc.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
  },
});
