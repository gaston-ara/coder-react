import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/itemlist/ItemList'
// import Home from '../home/Home'

function Categories() {
    const {categoryId} = useParams()
    const [datos, setData] = useState([]);

    const getData = async () => {
        const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`);
        const resData = await data.json();
        console.log(resData.results);
        setData(resData.results)
        };

        useEffect(() => {
            getData();
        }, [categoryId])

    return (
        <div>
            <ItemList datos={datos}/>
        </div>
    )
}

export default Categories
