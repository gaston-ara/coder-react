import React, {useEffect} from 'react'
import ItemList from '../itemlist/ItemList'

function ItemListContainer(props) {
    useEffect(() => {
       
    }, [])



    return (
        <div className="container">
            <h2 className="shop-title" id="catalogo">{props.greetings}</h2>
            <div className="catalogo">
                <div className="row">
                    <div><ItemList /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
