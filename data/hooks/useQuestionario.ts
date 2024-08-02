import { useState } from "react";
import todasAsPerguntas from '@/data/constants/perguntas'

export default function UseQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0)
    const [repostas, setRespostas] = useState<string[]>([])
    const [perguntas, setPerguntas] = useState(todasAsPerguntas.slice(0, 10))


}