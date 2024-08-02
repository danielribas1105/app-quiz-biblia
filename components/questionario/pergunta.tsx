import PerguntaModel from '@/data/models/Pergunta'
import { View, Text, StyleSheet } from 'react-native'
import Enunciado from './enunciado'
import Opcao from './opcao'

export interface PerguntaProps {
    pergunta: PerguntaModel
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View>
            <Enunciado enunciado={props.pergunta.enunciado}/>
            <View style={styles.container}>
                {props.pergunta.opcoes.map((opcao, indice) => 
                    <Opcao key={indice} indice={indice} texto={opcao} onPress={() => {}}/>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    }
})