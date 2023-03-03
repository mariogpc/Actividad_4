import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ts } from 'react-native';

export default function App() {

  const [materia1, setPrimerMateria] = useState("");
  const [materia2, setSegundaMateria] = useState("");
  const [materia3, setTercerMateria] = useState("");
  const [texto, setTexto] = useState("");

  const accion  = () => {
    const text = materia1 + materia2 + materia3;
    setTexto(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cajaTexto}
        value={materia1}
        onChangeText={setPrimerMateria}
      />
      <TextInput
        style={styles.cajaTexto}
        value={materia2}
        onChangeText={setSegundaMateria}
      />
      <TextInput
        style={styles.cajaTexto}
        value={materia3}
        onChangeText={setTercerMateria}
      />
      <Button
        title="Mostrar texto"
        onPress={accion}
      />
      <Text>{texto}</Text>
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
  cajaTexto:{
    borderColor: "black",
    borderWidth: 2,
    Width: 80,
  },
})