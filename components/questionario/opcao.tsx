import { LinearGradient } from "expo-linear-gradient"
import { Pressable, Text, StyleSheet } from "react-native"

export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <LinearGradient colors={['#724705', '#a97c15']} style={styles.background}/>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4f3103',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        marginHorizontal: 10
    },
    background: {
        position: 'absolute',
        borderRadius: 10,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.8
    }
})