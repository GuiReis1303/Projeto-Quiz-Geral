import React, {useState} from "react";
import Final from "./Final";

const QuizImpossivel = ( props ) => 
{
    require('./Quiz.css');

    const alteraTela = props.alteraTela
    const sorteados4 = props.sorteados4;

    const [ etapa, alteraEtapa ] = useState ( 0 );

    const [ pontos, alteraPontos ] = useState ( 0 );

    const perguntas = 
    [
        {
            pergunta: "Na temporada 2015/16, o Leicester se tornou campeão da Premier League de forma surpreendente. Quantos gols o artilheiro Vardy marcou nesta competição?",
            respostas: ["24", "21", "27", "15"],
            correta: 0
        },
        {
            pergunta: "Qual a nacionalidade do goleiro Handanovic?",
            respostas: ["Croácia", "Eslovénia", "Eslováquia", "Ucrania"],
            correta: 1
        },
        {
            pergunta: "O segundo maior artilheiro da história do Real Madrid é o:",
            respostas: ["Benzema", "Di Stefano", "Cristiano Ronaldo", "Raul"],
            correta: 3
        },
        {
            pergunta: "Com o apelido ilustre de (Adriano Michael Jackson) por qual equipe o atacante NÃO atuou?",
            respostas: ["Fluminense", "Ceará", "Santos", "Bahia"],
            correta: 2
        },
        {
            pergunta: "Quantos títulos conquistou na carreira o jogador Daniel Alves?",
            respostas: ["42", "43", "44", "45"],
            correta: 1
        },
        {
            pergunta: "Paul Pogba possui um irmão que também é jogador profissional; Qual o nome dele?",
            respostas: ["Florentin Pogba", "Mathias Pogba", "Traore Pogba", "Florentin Paul Pogba"],
            correta: 0
        },
        {
            pergunta: "Quais seleções estão empatadas com 3 vices em copa do mundo?",
            respostas: ["Argentina, Holanda e Alemanha", "Holanda, Brasil e Itália", "Holanda, Alemanha e Itália", "Holanda, Alemanha e Argentina"],
            correta: 0
        },
        {
            pergunta: "Em qual time europeu o Zico brasileiro jogou?",
            respostas: ["Fiorentina", "Roma", "Udinese", "Barcelona"],
            correta: 2
        },
        {
            pergunta: "A França já sediou uma copa do mundo de futebol?",
            respostas: ["Sim, uma vez", "Sim, duas vezes", "Sim, três vezes", "Nenhuma vez"],
            correta: 1
        },
        {
            pergunta: "Qual jogador brasileiro foi apelidado de (A Alegria do Povo)?",
            respostas: ["Pepe", "Coutinho", "Neymar", "Garrincha"],
            correta: 3
        },
    ];

    const bloqueiaTela = (i) =>{
        const elemento = document.getElementById('bloqueio');
        elemento.classList.add('resposta')
        verificaResposta(i, elemento)

    }

    const verificaResposta = (i, elemento) => 
    {  
        const resposta_correta = perguntas[sorteados4[etapa]].correta;
        const certa = resposta_correta == i;
        if( resposta_correta == i )
        {
            alteraPontos( pontos + 1);
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
                alteraTela( <Final pontos={pontos} alteraTela={alteraTela} certa={certa}/>)
            }
        }, 1000);
    }

    return ( 
        <div className="quiz">
            <div>
                <img src={require("./Impossivel/"+sorteados4[etapa]+".png")}/>
            </div>

            <div id='bloqueio'>
                <div>
                    <h1> { perguntas[ sorteados4[etapa] ].pergunta } </h1>
                </div>

                <div className="quizresposta">
                    <font>
                        {
                            perguntas[ sorteados4[etapa] ].respostas.map( ( r, i )  => {
                                return <div id={i} onClick={() => bloqueiaTela(i)}> { r } </div>
                            })   
                        }
                    </font>
                </div>
            </div>
        </div>
     );
}
 
export default QuizImpossivel;