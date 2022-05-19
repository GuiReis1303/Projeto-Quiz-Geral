import { getElementError } from "@testing-library/react";
import React, {useState} from "react";
import Final from "./Final";

const QuizFacil = ( props ) => 
{
    require('./Quiz.css');

    const alteraTela = props.alteraTela

    const [ etapa, alteraEtapa ] = useState ( 0 );

    const [ pontos, alteraPontos ] = useState ( 0 );

    const perguntas = 
    [
        {
            pergunta: "O brasil é quantas vezes campeão mundial?",
            respostas: ["Hexa", "Tri", "Treta", "Penta"],
            correta: 3
        },
        {
            pergunta: "Em que time o Neymar foi revelado?",
            respostas: ["Santos", "Ituano", "Flamengo", "São Paulo"],
            correta: 0
        },
        {
            pergunta: "Qual a nacionalidade do Cristiano Ronaldo?",
            respostas: ["Brasileiro", "Português", "Espanhol", "Italiano"],
            correta: 1
        },
        {
            pergunta: "Qual seleção foi o campeão da copa do mundo de 2014?",
            respostas: ["Alemanha", "Argentina", "Holanda", "Brasil"],
            correta: 0
        },
        {
            pergunta: "Qual é esse jogador?",
            respostas: ["Halland", "Pelé", "Mbappe", "Lukaku"],
            correta: 2
        },
        {
            pergunta: "No total, quantas pessoas jogam em uma partida?",
            respostas: ["20", "21", "22", "23"],
            correta: 2
        },
        {
            pergunta: "Quantos cartões amarelos são necessários para expulsar um jogador?",
            respostas: ["Um", "Dois", "Três", "Quatro"],
            correta: 1
        },
        {
            pergunta: "Quanto tempo dura um jogo de futebol completo? (Em minutos e sem acréscimos)",
            respostas: ["100 minutos", "110 minutos", "80 minutos", "90 minutos"],
            correta: 3
        },
        {
            pergunta: "Quantas copas do mundo o paraguai possui?",
            respostas: ["Nenhuma", "Possui uma", "Possui duas", "Possui três"],
            correta: 0
        },
        {
            pergunta: "Qual é a nacionalidade de atacante Zlatan Ibrahimovic?",
            respostas: ["Sueco", "Portugues", "Espanhol", "Italiano"],
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
                <img src={require("./Facil/"+etapa+".png")}/>
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
 
export default QuizFacil;


