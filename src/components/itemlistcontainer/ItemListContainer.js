import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList'


function ItemListContainer(props) {
    
    const [datos, setData] = useState([]);

    const getData = async () => {
        const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1648`);
        const resData = await data.json();
        console.log(resData.results);
        setData(resData.results)
        };
    

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container">
            <h2 className="shop-title" id="catalogo">{props.greetings}</h2>
            <div className="catalogo">
                <div className="row">
                    <div><ItemList datos={datos} /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
