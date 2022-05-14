import QuizFacil from './QuizFacil';
import QuizMedio from './QuizMedio';
import QuizDificil from './QuizDificil';
import QuizImpossivel from './QuizImpossivel';

const Nivel = (props) =>{
    const alteraTela = props.alteraTela;
    require('./Nivel.css')
    return(
        <div className='backgroundN'>
            <div>   
                <p className='avisoN'>Se você clicar um qualquer lugar desse quadrado irá iniciar o quiz no <b>Nível Impossível</b>. Caso esteja preparado só clique e prepara-se!</p>
                  </div>

            <div className='nivel'>
                <div className='facilN' onClick={() => alteraTela(<QuizFacil alteraTela={alteraTela}/>)}>
                    <div>
                        <h2>Fácil</h2>
                        <font> <p>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>entre outras...</li>
                        </ul>
                        </font>
                    </div>
                </div>

                <div className='medioN' onClick={() => alteraTela(<QuizMedio alteraTela={alteraTela}/>)}>
                    <div>   
                        <h2>Médio</h2>
                    <font>
                        <p>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>entre outras...</li>
                        </ul>
                    </font> 
                    </div>
                </div>

                <div className='dificilN' onClick={() => alteraTela(<QuizDificil alteraTela={alteraTela}/>)}>
                    <div>  
                        <h2>Difícil</h2>
                    <font>
                        <p>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>entre outras...</li>
                        </ul>
                     </font>  
                    </div>
                </div>

                <div className='impossivelN' onClick={() => alteraTela(<QuizImpossivel alteraTela={alteraTela}/>)}>
                    <div>
                        <h2>Impossível</h2>
                     <font>
                        <p>Você está preparado?</p>
                        <p>Você enfrentará <br/>perguntas do tipo:</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>entre outras...</li>
                        </ul>
                      </font> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nivel;