import React from "react";

const ItemListContainer = ({greeting}) => {
    return ( 
        <div className="d-flex justify-content-center py-3">
            <p className="alert alert-warning w-25 text-center" role={"alert"}>{greeting}</p>
        </div>
     );
}
 
export default ItemListContainer;