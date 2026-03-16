import React, {useState} from "react";
import "./App.css";

export default () => {
    const[numero1, setNumero1]     = useState("");
    const[numero2, setNumero2]     = useState("");
    const[resultado, setResultado] = useState("");
    
    const soma = Number(numero1) + Number(numero2);
    
    return(
    <div className="container">
        <div className="card">
          <h2>Soma de 02 Números</h2>
          <input type="number" 
                placeholder="Digite o primeiro Número"
                value={numero1} onChange={(e) => setNumero1(e.target.value)}
          />
          <input type="number" 
                placeholder="Digite o segundo Número"
                value={numero2} onChange={(e) => setNumero2(e.target.value)}
          />
          <p className="resultado">Resultado: {soma}</p>
      </div>
    </div>
  )
}