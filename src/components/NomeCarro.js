import style from './NomeCarro.module.css'

function NomeCarro ({carro}) {
    return (
        <>
            <p className={style.pCarro}>{carro}</p>
        </>
    )
}

export default NomeCarro