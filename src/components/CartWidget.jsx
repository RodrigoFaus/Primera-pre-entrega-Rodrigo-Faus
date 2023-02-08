import React from "react";

const CartWidget = () => {
    return ( 
    <div className="col-md-2 color30-fontw">
        <button type="button" className="btn btn-light position-relative">
      <img src={"assets/cart4.svg"} alt="" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3  
            </span>
        </button>
    </div> );
}
 
export default CartWidget;