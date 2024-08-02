import Pergunta from "../models/Pergunta";

const perguntas: Pergunta[] = [
    {
        "id": 1,
        "enunciado": "Quem foi lançado na cova dos leões?",
        "opcoes": ["José", "Moisés", "Daniel", "Abraão"],
        "resposta": 2
    },
    {
        "id": 2,
        "enunciado": "Quem construiu uma arca para sobreviver ao dilúvio?",
        "opcoes": ["Noé", "Jonas", "Elias", "Paulo"],
        "resposta": 0
    },
    {
        "id": 3,
        "enunciado": "Qual foi o primeiro milagre de Jesus?",
        "opcoes": ["Curar um cego", "Transformar água em vinho", "Andar sobre as águas", "Multiplicar os pães"],
        "resposta": 1
    },
    {
        "id": 4,
        "enunciado": "Quem foi vendido como escravo pelos seus irmãos?",
        "opcoes": ["José", "Isaac", "Esaú", "Ismael"],
        "resposta": 0
    },
    {
        "id": 5,
        "enunciado": "Qual o nome da mãe de Jesus?",
        "opcoes": ["Maria", "Ana", "Marta", "Elisabete"],
        "resposta": 0
    },
    {
        "id": 6,
        "enunciado": "Quem derrubou as muralhas de Jericó?",
        "opcoes": ["Josué", "Moisés", "Gideão", "Sansão"],
        "resposta": 0
    },
    {
        "id": 7,
        "enunciado": "Quem foi o rei de Israel que sucedeu a Saul?",
        "opcoes": ["Davi", "Salomão", "Josias", "Jeremias"],
        "resposta": 0
    },
    {
        "id": 8,
        "enunciado": "Quem recebeu os 10 Mandamentos?",
        "opcoes": ["Moisés", "Abraão", "Jacó", "Elias"],
        "resposta": 0
    },
    {
        "id": 9,
        "enunciado": "Quem traiu Jesus com um beijo?",
        "opcoes": ["Pedro", "Tomé", "Judas", "João"],
        "resposta": 2
    },
    {
        "id": 10,
        "enunciado": "Quem foi engolido por um grande peixe?",
        "opcoes": ["Jonas", "Pedro", "Paulo", "João"],
        "resposta": 0
    },
    {
        "id": 11,
        "enunciado": "Qual discípulo andou sobre as águas com Jesus?",
        "opcoes": ["João", "Pedro", "Tiago", "Tomé"],
        "resposta": 1
    },
    {
        "id": 12,
        "enunciado": "Quem liderou os israelitas na travessia do Mar Vermelho?",
        "opcoes": ["Moisés", "Arão", "Josué", "Calebe"],
        "resposta": 0
    },
    {
        "id": 13,
        "enunciado": "Quem escreveu a maioria das cartas do Novo Testamento?",
        "opcoes": ["Pedro", "João", "Tiago", "Paulo"],
        "resposta": 3
    },
    {
        "id": 14,
        "enunciado": "Quem foi o rei mais sábio de Israel?",
        "opcoes": ["Salomão", "Davi", "Saul", "Josias"],
        "resposta": 0
    },
    {
        "id": 15,
        "enunciado": "Quem foi chamado 'o amigo de Deus'?",
        "opcoes": ["Moisés", "Abraão", "Davi", "Jacó"],
        "resposta": 1
    },
    {
        "id": 16,
        "enunciado": "Quem matou Golias?",
        "opcoes": ["Saul", "Samuel", "Davi", "Jonas"],
        "resposta": 2
    },
    {
        "id": 17,
        "enunciado": "Quem foi o último juiz de Israel?",
        "opcoes": ["Samuel", "Sansão", "Gideão", "Eli"],
        "resposta": 0
    },
    {
        "id": 18,
        "enunciado": "Qual o nome do filho mais velho de Adão e Eva?",
        "opcoes": ["Abel", "Caim", "Sete", "Enos"],
        "resposta": 1
    },
    {
        "id": 19,
        "enunciado": "Quem foi o primeiro rei de Israel?",
        "opcoes": ["Davi", "Saul", "Salomão", "Roboão"],
        "resposta": 1
    },
    {
        "id": 20,
        "enunciado": "Quem foi levado aos céus em um redemoinho?",
        "opcoes": ["Enoque", "Moisés", "Abraão", "Elias"],
        "resposta": 3
    },
    {
        "id": 21,
        "enunciado": "Quem interpretou os sonhos do Faraó no Egito?",
        "opcoes": ["Moisés", "José", "Daniel", "Arão"],
        "resposta": 1
    },
    {
        "id": 22,
        "enunciado": "Quem era o irmão mais novo de Moisés?",
        "opcoes": ["Josué", "Arão", "Calebe", "Nadabe"],
        "resposta": 1
    },
    {
        "id": 23,
        "enunciado": "Quem foi a mulher de Abraão?",
        "opcoes": ["Raquel", "Sara", "Rebeca", "Lea"],
        "resposta": 1
    },
    {
        "id": 24,
        "enunciado": "Quem foi o filho prometido a Abraão e Sara?",
        "opcoes": ["Ismael", "Isaac", "Jacó", "Esaú"],
        "resposta": 1
    },
    {
        "id": 25,
        "enunciado": "Quem teve um sonho com uma escada que alcançava o céu?",
        "opcoes": ["José", "Elias", "Daniel", "Jacó"],
        "resposta": 3
    },
    {
        "id": 26,
        "enunciado": "Quem interpretou o sonho do rei Nabucodonosor?",
        "opcoes": ["José", "Ezequiel", "Elias", "Daniel"],
        "resposta": 3
    },
    {
        "id": 27,
        "enunciado": "Quem foi chamado por Deus em uma sarça ardente?",
        "opcoes": ["Abraão", "Moisés", "Isaque", "Jacó"],
        "resposta": 1
    },
    {
        "id": 28,
        "enunciado": "Quem foi o pai de João Batista?",
        "opcoes": ["José", "Simão", "Zacarias", "Anás"],
        "resposta": 2
    },
    {
        "id": 29,
        "enunciado": "Quem batizou Jesus no rio Jordão?",
        "opcoes": ["Pedro", "João Batista", "Tiago", "Paulo"],
        "resposta": 1
    },
    {
        "id": 30,
        "enunciado": "Quem escreveu o livro de Apocalipse?",
        "opcoes": ["Pedro", "João", "Paulo", "Tiago"],
        "resposta": 1
    },
    {
        "id": 31,
        "enunciado": "Quem teve a visão de um vale de ossos secos?",
        "opcoes": ["Daniel", "Isaías", "Ezequiel", "Jeremias"],
        "resposta": 2
    },
    {
        "id": 32,
        "enunciado": "Quem derrotou o exército dos midianitas com 300 homens?",
        "opcoes": ["Sansão", "Saul", "Gideão", "Josué"],
        "resposta": 2
    },
    {
        "id": 33,
        "enunciado": "Quem foi chamado de 'homem segundo o coração de Deus'?",
        "opcoes": ["Moisés", "Davi", "Abraão", "Salomão"],
        "resposta": 1
    },
    {
        "id": 34,
        "enunciado": "Qual é o primeiro livro da Bíblia?",
        "opcoes": ["Gênesis", "Êxodo", "Levítico", "Números"],
        "resposta": 0
    },
    {
        "id": 35,
        "enunciado": "Onde Jesus nasceu?",
        "opcoes": ["Jerusalém", "Belém", "Nazará", "Cafarnaum"],
        "resposta": 1
    },
    {
        "id": 36,
        "enunciado": "Quem anunciou a Maria que ela seria a mãe de Jesus?",
        "opcoes": ["Gabriel", "Miguel", "Rafael", "Uriel"],
        "resposta": 0
    },
    {
        "id": 37,
        "enunciado": "Qual profissão de Jesus antes de iniciar seu ministério?",
        "opcoes": ["Pescador", "Carpinteiro", "Pastor", "Agricultor"],
        "resposta": 1
    },
    {
        "id": 38,
        "enunciado": "Quem batizou Jesus?",
        "opcoes": ["Pedro", "João Batista", "Tiago", "Paulo"],
        "resposta": 1
    },
    {
        "id": 39,
        "enunciado": "Quantos dias Jesus jejuou no deserto?",
        "opcoes": ["30", "20", "10", "40"],
        "resposta": 3
    },
    {
        "id": 40,
        "enunciado": "Em qual cidade Jesus transformou água em vinho?",
        "opcoes": ["Nazaré", "Jerusalém", "Caná", "Belém"],
        "resposta": 2
    },
    {
        "id": 41,
        "enunciado": "Qual era o nome dos pais de Jesus?",
        "opcoes": ["Maria e José", "Elisabete e Zacarias", "Ana e Joaquim", "Marta e Lázaro"],
        "resposta": 0
    },
    {
        "id": 42,
        "enunciado": "Quantos discípulos Jesus escolheu?",
        "opcoes": ["10", "12", "15", "20"],
        "resposta": 1
    },
    {
        "id": 43,
        "enunciado": "Quem foi ressuscitado por Jesus após quatro dias de morto?",
        "opcoes": ["Jairo", "Lázaro", "Pedro", "Judas"],
        "resposta": 1
    },
    {
        "id": 44,
        "enunciado": "Quem negou Jesus três vezes?",
        "opcoes": ["Pedro", "João", "Judas", "Tomé"],
        "resposta": 0
    },
    {
        "id": 45,
        "enunciado": "Quem traiu Jesus por 30 moedas de prata?",
        "opcoes": ["Judas", "Pedro", "Tiago", "Paulo"],
        "resposta": 0
    },
    {
        "id": 46,
        "enunciado": "Em que monte Jesus foi crucificado?",
        "opcoes": ["Sinaí", "Carmelo", "Olivet", "Calvário"],
        "resposta": 3
    },
    {
        "id": 47,
        "enunciado": "Quem ajudou Jesus a carregar a cruz?",
        "opcoes": ["Simão Cirineu", "José de Arimateia", "Nicodemos", "Bartimeu"],
        "resposta": 0
    },
    {
        "id": 48,
        "enunciado": "Quantos dias Jesus permaneceu no túmulo antes de ressuscitar?",
        "opcoes": ["2", "3", "4", "5"],
        "resposta": 1
    },
    {
        "id": 49,
        "enunciado": "Quem viu Jesus primeiro após sua ressurreição?",
        "opcoes": ["Pedro", "Maria Madalena", "João", "Tiago"],
        "resposta": 1
    },
    {
        "id": 50,
        "enunciado": "Qual foi o último mandamento de Jesus aos seus discípulos?",
        "opcoes": ["Amar uns aos outros", "Orar sem cessar", "Ide e fazei discípulos de todas as nações", "Guardai os mandamentos"],
        "resposta": 2
    },
    {
        "id": 51,
        "enunciado": "Em que lugar Jesus ascendeu ao céu?",
        "opcoes": ["Monte das Oliveiras", "Monte Carmelo", "Monte Sinai", "Monte Calvário"],
        "resposta": 0
    },
    {
        "id": 52,
        "enunciado": "Quem foi escolhido para substituir Judas entre os discípulos?",
        "opcoes": ["Matias", "Barnabé", "Silas", "Timóteo"],
        "resposta": 0
    },
    {
        "id": 53,
        "enunciado": "Qual era o nome do homem que pediu o corpo de Jesus a Pilatos para sepultá-lo?",
        "opcoes": ["Nicodemos", "Simão Cirineu", "José de Arimateia", "Bartimeu"],
        "resposta": 2
    },
    {
        "id": 54,
        "enunciado": "Qual foi a última refeição que Jesus teve com seus discípulos?",
        "opcoes": ["O Banquete de Caná", "A Ceia da Páscoa", "A Multiplicação dos Pães", "A Última Ceia"],
        "resposta": 3
    },
    {
        "id": 55,
        "enunciado": "Qual é o sermão mais famoso de Jesus?",
        "opcoes": ["Sermão do Monte", "Sermão das Oliveiras", "Sermão das Parabólicas", "Sermão do Templo"],
        "resposta": 0
    },
    {
        "id": 56,
        "enunciado": "Qual era a profissão de Pedro antes de seguir Jesus?",
        "opcoes": ["Pescador", "Carpinteiro", "Pastor", "Agricultor"],
        "resposta": 0
    },
    {
        "id": 57,
        "enunciado": "Quantas vezes Jesus multiplicou os pães e os peixes?",
        "opcoes": ["1", "2", "3", "4"],
        "resposta": 1
    },
    {
        "id": 58,
        "enunciado": "Quem subiu em uma árvore para ver Jesus?",
        "opcoes": ["Pedro", "Zaqueu", "João", "Bartimeu"],
        "resposta": 1
    },
    {
        "id": 59,
        "enunciado": "Qual é o nome do ladrão que foi solto no lugar de Jesus?",
        "opcoes": ["Barrabás", "Gestas", "Dimas", "Judas"],
        "resposta": 0
    },
    {
        "id": 60,
        "enunciado": "Para quem Jesus disse 'Eu sou o caminho, a verdade e a vida'?",
        "opcoes": ["Pedro", "Tomé", "João", "Filipe"],
        "resposta": 1
    }
]    

export default perguntas