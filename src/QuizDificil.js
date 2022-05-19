import React, {useState} from "react";
import Final from "./Final";

const QuizDificil = ( props ) => 
{
    require('./Quiz.css');

    const alteraTela = props.alteraTela

    const [ etapa, alteraEtapa ] = useState ( 0 );

    const [ pontos, alteraPontos ] = useState ( 0 );

    const perguntas = 
    [
        {
            pergunta: "Quem ganhou a Bola de Ouro em 2009?",
            respostas: ["Lionel Messi", "Cristiano Ronaldo", "Kaká", "Ronaldinho Gaúcho"],
            correta: 0
        },
        {
            pergunta: "Qual é o nome completo do Mbappé?",
            respostas: ["Kylian Lottin Mbappé", "Kylian Mbappé Lottin", "Kylian Mbappé", "Mbappé"],
            correta: 1
        },
        {
            pergunta: "Quantos anos tinha Pelé em sua primeira convocação pra Copa do Mundo?",
            respostas: ["16", "17", "18", "19"],
            correta: 1
        },
        {
            pergunta: "Antes de ir para o Barcelona em 2018, Coutinho atuou em outro clube espanhol. Qual era esse clube?",
            respostas: ["Malaga", "Real Madrid", "Espanyol", "Villareal"],
            correta: 2
        },
        {
            pergunta: "Qual desses países não participou da Copa do Mundo 2018?",
            respostas: ["Tunisia", "Irã", "Brasil", "Holanda"],
            correta: 3
        },
        {
            pergunta: "Quem foi o artilheiro da Libertadores 2020?",
            respostas: ["Agustin Martinez (Penarol)", "Rony (Palmeiras)", "Fidel Martinez (Barcelona)", "Marinho (Santos)"],
            correta: 2
        },
        {
            pergunta: "O jogo lendário aonde Maradona fez um gol de mão e ficou conhecido como (la mano de dios) foi o:",
            respostas: ["Argentina vs Inglaterra", "Argentina vs Alemanha", "Argentina vs Uruguai", "Argentina vs Brasil"],
            correta: 0
        },
        {
            pergunta: "Quantas Champions League o Ajax já conquistou?",
            respostas: ["Três", "Quatro", "Cinco", "Nenhuma"],
            correta: 1
        },
        {
            pergunta: "Qual é o clube com mais vices da história na Champions League?",
            respostas: ["Valencia", "Liverpool", "Juventus", "Barcelona"],
            correta: 2
        },
        {
            pergunta: "Quantas copas do mundo o Rivaldo conquistou com a Seleção Brasileira?",
            respostas: ["Uma, em 2002", "Duas, em 1994 e 2002", "Nenhuma", "Não jogou nenhuma copa do mundo"],
            correta: 0
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
                <img src={require("./Dificil/"+etapa+".png")}/>
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
 
export default QuizDificil;