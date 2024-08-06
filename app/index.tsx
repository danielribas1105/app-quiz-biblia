import Pagina from "@/components/templates/pagina";
import Logo from "@/components/templates/logo";
import Pergunta from "@/components/questionario/pergunta";
import UseQuestionario from "@/data/hooks/useQuestionario";
import Resultado from "@/components/questionario/resultado";

export default function Index() {

  const {pergunta, concluido, pontuacao, totalDePerguntas, reiniciar, responder} = UseQuestionario()

  return (
    <Pagina>
      <Logo/>
      { concluido ? (
        <Resultado 
          pontuacao={pontuacao} 
          totalDePerguntas={totalDePerguntas} 
          reiniciar={reiniciar}/>
      ) : (
        <Pergunta pergunta={pergunta} opcaoSelecionada={responder}/>
      )}
    </Pagina>
  );
}
