import React, {useState, useEffect} from 'react'
import ItemList from '../itemlist/ItemList'

const jsonData = [{
    "id": 1,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_658245-MLA43229688028_082020-V.webp",
    "titulo": "Mouse Logitech Master Series MX Master 3",
    "precio": 10349,
    "stock": 3
}, {
    "id": 2,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_797163-MLA32146410200_092019-O.webp",
    "titulo": "Mouse Logitech M170",
    "precio": 765,
    "stock": 10
}, {
    "id": 3,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_715011-MLA45384661954_032021-O.webp",
    "titulo": "Mouse Redragon Cobra M711-FPS",
    "precio": 3179,
    "stock": 6
}, {
    "id": 4,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-O.webp",
    "titulo": "Mouse Logitech G Series Hero 16K G502",
    "precio": 6020,
    "stock": 5
}, {
    "id": 5,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_651987-MLA32841435695_112019-V.webp",
    "titulo": "Mouse Genius Inalambrico Nx-7000",
    "precio": 860,
    "stock": 11
}, {
    "id": 6,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_674581-MLA41799362594_052020-O.webp",
    "titulo": "Mouse Razer DeathAdder Essential",
    "precio": 3490,
    "stock": 8
}
];

function ItemListContainer(props) {
    const [datos, setData] = useState([]);

    const getData = () => {
            return new Promise((resolve, reject) => {
                    resolve(jsonData);
                  getData().then((data) => { setData(data) })  
            });
        };
       
    useEffect(() => {
        setTimeout(() => getData(), 2000)
    }, [])

    return (
        <div className="container">
            <h2 className="shop-title" id="catalogo">{props.greetings}</h2>
            <div className="catalogo">
                <div className="row">
                    <div><ItemList datos={datos}/></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
