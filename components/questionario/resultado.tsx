import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultadoProps {
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}
export default function Resultado(props: ResultadoProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Você Acertou!</Text>
            <Text style={styles.destaques}>
                {Math.round((props.pontuacao / props.totalDePerguntas) * 100)}%
            </Text>
            <Pressable style={styles.botao} onPress={props.reiniciar}>
                <LinearGradient colors={['#724705', '#a97c15']} style={styles.background}/>
                <Text style={styles.textoBotao}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#52350a',
        padding: 20,
        borderRadius: 10
    },
    texto: {
        color: '#bbb',
        fontSize: 20
    },
    destaques: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
    },
    background: {
        position: 'absolute',
        borderRadius: 10,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    botao: {
        backgroundColor: '#774516',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 10
    },
    textoBotao: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        
    }
})