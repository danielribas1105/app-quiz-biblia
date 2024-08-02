import { LinearGradient } from "expo-linear-gradient"
import { View, Text, StyleSheet } from "react-native"

export interface EnunciadoProps {
    enunciado: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#503103', '#673f05']} style={styles.background}/>
            <Text style={styles.texto}>{props.enunciado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4f3103',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 30
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