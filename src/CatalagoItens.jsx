import ItemFilme from "./ItemFilme";

const CatalagoItens = ({titulo, catalogos}) => {

    
    return (
        <>
            <h1 className='sub-title'>{titulo}</h1>
            <div className='section-itens'>
                {
                    catalogos.map((catalogo) => 
                          <ItemFilme titulo={catalogo.nome} imagem={catalogo.imagem} desc={catalogo.descricao} />
                )
            }
            </div>
        </>
    )
}

export default CatalagoItens;