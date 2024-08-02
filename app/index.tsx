import Pagina from "@/components/templates/pagina";
import Logo from "@/components/templates/logo";
import Pergunta from "@/components/questionario/pergunta";
import perguntas from "@/data/constants/perguntas";

export default function Index() {
  return (
    <Pagina>
      <Logo/>
      <Pergunta pergunta={perguntas[0]}/>
    </Pagina>
  );
}
