import QuizFacil from './QuizFacil';
import QuizMedio from './QuizMedio';
import QuizDificil from './QuizDificil';
import QuizImpossivel from './QuizImpossivel';

const Nivel = (props) =>{
    const alteraTela = props.alteraTela;
    require('./Nivel.css')

    const sorteados1 = []
    for (let i = 0; i < 100; i++) {
        const j = Math.floor(Math.random() * 10);
        if (sorteados1.indexOf(j) == -1)
            sorteados1.push(j)
    }
    

    const sorteados2 = []
    for (let i = 0; i < 100; i++) {
        const j = Math.floor(Math.random() * 10);
        if (sorteados2.indexOf(j) == -1)
            sorteados2.push(j)
    }
    

    const sorteados3 = []
    for (let i = 0; i < 100; i++) {
        const j = Math.floor(Math.random() * 10);
        if (sorteados3.indexOf(j) == -1)
            sorteados3.push(j)
    }
    

    const sorteados4 = []
    for (let i = 0; i < 100; i++) {
        const j = Math.floor(Math.random() * 10);
        if (sorteados4.indexOf(j) == -1)
            sorteados4.push(j)
    }


    return(
        <div className='backgroundN'>
            <div>   
                <p className='avisoN'>Selecione seu <b>Nível</b> e divirta-se!</p>
                  </div>

            <div className='nivel'>
                <div className='facilN' onClick={() => alteraTela(<QuizFacil alteraTela={alteraTela} sorteados1={sorteados1}/>)}>
                    <div>
                        <h2>Fácil</h2>
                        <font> <p className='textoAbaixoNivel'>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li>Qual é esse jogador...</li>
                            <li>Qual a nacionalidade...</li>
                            <br/>
                            
                        </ul>
                        <p>entre outras...</p>
                        </font>
                    </div>
                </div>

                <div className='medioN' onClick={() => alteraTela(<QuizMedio alteraTela={alteraTela} sorteados2={sorteados2}/>)}>
                    <div>   
                        <h2>Médio</h2>
                    <font>
                        <p className='textoAbaixoNivel'>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li>Campeões Nacionais...</li>
                            <li>Campeões Europeus...</li>
                            <br/>
                            
                        </ul>
                        <p>entre outras...</p>
                    </font> 
                    </div>
                </div>

                <div className='dificilN' onClick={() => alteraTela(<QuizDificil alteraTela={alteraTela} sorteados3={sorteados3}/>)}>
                    <div>  
                        <h2>Difícil</h2>
                    <font>
                        <p className='textoAbaixoNivel'>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li>Bola de Ouro...</li>
                            <li>Copa do Mundo...</li>
                            <br/>
                            
                        </ul>
                        <p>entre outras...</p>
                     </font>  
                    </div>
                </div>

                <div className='impossivelN' onClick={() => alteraTela(<QuizImpossivel alteraTela={alteraTela} sorteados4={sorteados4}/>)}>
                    <div>
                        <h2>Impossível</h2>
                     <font>
                        <p className='textoAbaixoNivel'>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li>BOA SORTE...</li>
                            <li>BOA SORTE...</li>
                            <br/>
                            
                        </ul>
                        <p>entre outras...</p>
                      </font> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nivel;