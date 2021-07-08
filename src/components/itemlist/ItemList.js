import React from "react";
import Item from '../Item/Item'


const datos = [{
    "id": 1,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_658245-MLA43229688028_082020-V.webp",
    "titulo": "Mouse Logitech Master Series MX Master 3",
    "precio": 10349
}, {
    "id": 2,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_797163-MLA32146410200_092019-O.webp",
    "titulo": "Mouse Logitech M170",
    "precio": 765
}, {
    "id": 3,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_715011-MLA45384661954_032021-O.webp",
    "titulo": "Mouse Redragon Cobra M711-FPS",
    "precio": 3179
}, {
    "id": 4,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-O.webp",
    "titulo": "Mouse Logitech G Series Hero 16K G502",
    "precio": 6020
}, {
    "id": 5,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_651987-MLA32841435695_112019-V.webp",
    "titulo": "Mouse Genius Inalambrico Nx-7000",
    "precio": 860
}, {
    "id": 6,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_674581-MLA41799362594_052020-O.webp",
    "titulo": "Mouse Razer DeathAdder Essential",
    "precio": 3490
}
];

function ItemList() {

    return (
        <div className="row d-flex justify-content-center">
            {datos?.map((value, index) => {
                return <Item key={index} id={value.id} image={value.imagen} title={value.titulo} price={value.precio} />
            })
            }
        </div>
    )
};

export default ItemList;