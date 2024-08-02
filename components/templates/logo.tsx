import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bíblia Quiz</Text>
            <Text style={styles.subtitulo}>Você conhece a Bíblia?</Text>
            <Text style={styles.texto}>Teste os seus conhecimentos com esse quiz!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 30
    },
    titulo: {
        fontFamily: 'Morris-Roman-Black',
        fontSize: 78,
        textAlign: 'center',
        color: '#e8eae0',
    },
    subtitulo: {
        fontFamily: 'Morris-Roman-Black-Alt',
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        opacity: 0.8
    },
    texto:{
        fontFamily: 'Morris-Roman-Black-Alt',
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        opacity: 0.8
    }
})