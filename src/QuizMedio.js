import React, {useState} from "react";
import Final from "./Final";

const QuizMedio = ( props ) => 
{
    require('./Quiz.css');

    const alteraTela = props.alteraTela

    const [ etapa, alteraEtapa ] = useState ( 0 );

    const [ pontos, alteraPontos ] = useState ( 0 );

    const perguntas = 
    [
        {
            pergunta: "Quais são as equipes Tri-Campeões da Copa Conmebol Libertadores?",
            respostas: ["Palmeiras, Flamengo e São Paulo", "Palmeiras, Grêmio, São Paulo e Santos"
            , "Palmeiras, Santos, São Paulo e Cruzeiro", "Flamengo, Santos, São Paulo e Corinthians"],
            correta: 1
        },
        {
            pergunta: "O maior clube vencedor da Liga dos Campeões, é o:",
            respostas: ["Real Madrid", "Barcelona", "Liverpool", "Milan"],
            correta: 0
        },
        {
            pergunta: "O maior clube vencedor da Copa Conmebol Libertadores, é o:",
            respostas: ["Boca Juniors", "Estudiantes", "Independiente", "São Paulo"],
            correta: 2
        },
        {
            pergunta: "Qual é este Estádio?",
            respostas: ["Camp Nou", "Maracanã", "Allianz Arena", "Santiago Bernabeu"],
            correta: 3
        },
        {
            pergunta: "Qual foi o primeiro time europeu em que Romário jogou?",
            respostas: ["Barcelona", "PSV", "Sevilla", "Milan"],
            correta: 1
        },
        {
            pergunta: "Quais as duas equipes estrelaram o chamado “Maracanazo”?",
            respostas: ["Brasil vs Uruguai", "Brasil vs Argentina", "Brasil vs Italia", "Brasil vs Alemanha"],
            correta: 0
        },
        {
            pergunta: "Em que clube Ronaldinho estreou?",
            respostas: ["Grêmio", "Flamengo", "Corinthians", "Atlético Mineiro"],
            correta: 0
        },
        {
            pergunta: "Qual é o nome deste ex-jogador espanhol?",
            respostas: ["Xabi Alonso", "Piquê", "Carles Puyou", "Messi"],
            correta: 2
        },
        {
            pergunta: "Aonde jogava Roberto Carlos antes de ir para o Real Madrid em 1996?",
            respostas: ["Palmeiras", "União São João", "Real Madrid", "Inter-de-Milão"],
            correta: 3
        },
        {
            pergunta: "Esse simbolo pertence a qual seleção mundial de futebol?",
            respostas: ["Canadá", "Nova Zelândia", "França", "Italia"],
            correta: 1
        },
    ];

    const bloqueiaTela = (i) =>{
        const elemento = document.getElementById(i);
        elemento.classList.add('resposta')
        verificaResposta(i, elemento)

    }

    const verificaResposta = (i, elemento) => 
    {  
        const resposta_correta = perguntas[etapa].correta;
        if( resposta_correta == i )
        {
            alteraPontos( pontos + 3);
            document.getElementById(i).classList.add('certo')
        } else{
            document.getElementById(i).classList.add('errado')
        }

        setTimeout(() => {
            elemento.classList.remove('resposta');
            document.getElementById(i).classList.remove('certo');
            document.getElementById(i).classList.remove('errado');
            
            if( etapa + 1 < perguntas.length ){
                
                alteraEtapa( etapa + 1);
                
            }
            else{
                alteraTela( <Final alteraTela={alteraTela}/>)
            }
        }, 2000);
    }

    return ( 
        <div className="quiz">
            <div>
                <img src={require("./Medio/"+etapa+".png")}/>
            </div>

            <div>
                <div>
                    <h1> { perguntas[ etapa ].pergunta } </h1>
                </div>

                <div className="quizresposta">
                    <font>
                        {
                            perguntas[ etapa ].respostas.map( ( r, i )  => {
                                return <div id={i} onClick={() => bloqueiaTela(i)}> { r } </div>
                            })   
                        }
                    </font>
                </div>
            </div>
        </div>
     );
}
 
export default QuizMedio;