import PerguntaModel from '@/data/models/Pergunta'
import { View, StyleSheet } from 'react-native'
import Enunciado from './enunciado'
import Opcao from './opcao'

export interface PerguntaProps {
    pergunta: PerguntaModel
    opcaoSelecionada: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View>
            <Enunciado enunciado={props.pergunta.enunciado}/>
            <View style={styles.container}>
                {props.pergunta.opcoes.map((opcao, indice) => 
                    <Opcao 
                        key={indice} 
                        indice={indice} 
                        texto={opcao} 
                        onPress={() => {props.opcaoSelecionada(indice)}}
                    />
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