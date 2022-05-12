import Menu from './Menu';

const Nivel = () =>{
    require('./Nivel.css')
    return(
        <div className='backgroundN'>
            <div>   
                <p className='avisoN'>Se você clicar um qualquer lugar desse quadrado irá iniciar o quiz no <b>Nível Impossível</b>. Caso esteja preparado só clique e prepara-se!</p>
                  </div>
            <div className='nivel'>
                <div className='facilN'>
                  

              
                  
                  
                    <div>
                        <h2>Nível Fácil</h2>
                        <font> <p>Você está preparado?</p><br/>
                        <p>Você enfrentará perguntas do tipo:</p>
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

                <div className='medioN'>
                    <div>   
                        <h2>Nível Médio</h2>
                    <font>
                        <p>Você está preparado?</p><br/>
                        <p>Você enfrentará perguntas do tipo:</p>
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

                <div className='dificilN'>
                    <div>  
                        <h2>Nível Difícil</h2>
                    <font>
                        <p>Você está preparado?</p><br/>
                        <p>Você enfrentará perguntas do tipo:</p>
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

                <div className='impossivelN'>
                    <div>
                     
                        <h2>Nível Impossível</h2>
                     <font>
                        <p>Você está preparado?</p><br/>
                        <p>Você enfrentará perguntas do tipo:</p>
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