function OutraLista ({ itens }) {
    return (
        <>
            <h3>Lista de coisas boa:</h3>
            {itens.lenght > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há item na lista</p>
            )
            }
        </>
    )
}

export default OutraLista