import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Lottie source={require('./assets/typing.json')} autoPlay loop ></Lottie>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
