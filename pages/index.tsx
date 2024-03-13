import React, { useState } from "react"
import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"


export default function Formulario() {
  const [qntdPortas, setQntdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(2)
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor = "#c0392c">
        <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>   
          <EntradaNumerica text="Qntd portas?" value={qntdPortas} onChange={novaQntd => setQntdPortas(novaQntd)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text="Porta com presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>

        </Cartao>
        
        <Cartao bgcolor = "#28a085">
          <Link href={`/jogo/${qntdPortas}/${comPresente}`} className={styles.link}>
            <h2 >Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
