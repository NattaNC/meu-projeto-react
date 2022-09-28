import Item from "./Item"
import NomeCarro from "./NomeCarro"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Toyota" ano_lancamento={1964}/>
                <NomeCarro carro="Corola" />
                <Item marca="Fiat" ano_lancamento={1974} />
                <NomeCarro carro="Uno" />
                <Item marca="Renault"/>
                <Item />
            </ul>
        </>
    )
}

export default List