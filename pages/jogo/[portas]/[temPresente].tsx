import Porta from "../../../components/Porta"
import { useEffect, useState } from "react"
import React from "react"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import {useRouter} from "next/router"

export default function Jogo(){
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)


  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const qntdPortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente<= portas
    setValido(qntdPortasValida && temPresenteValido)
  }, [portas])

  function renderizarPortas(){
    return portas.map(porta =>{
      return <Porta key={porta.numero} value={porta} onChange={novaPorta=>{
        setPortas(atualizarPortas(portas, novaPorta))
      }}/>
    })
  }
  
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido?
        renderizarPortas():
        <h1>Valores Inválidos!</h1>
        }

      </div>
      <div className={styles.botoes}>
          <Link href={"/"}>
            <button>Reiniciar</button>
          </Link>
      </div>
    </div>
  )
}
