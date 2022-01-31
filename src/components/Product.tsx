import React from "react";
import z1 from "./../assets/Zapote1.jpeg";
import z2 from "./../assets/Zapote2.jpeg";
import z3 from "./../assets/Zapote3.jpeg";
import z4 from "./../assets/Zapote4.jpeg";
import z5 from "./../assets/Zapote5.jpeg";

const img = [z1, z2, z3, z4, z5];

const Product = () => {
  return (
    <div className=" text-center py-4">
      {img.map((pic) => (
        <img className="img img-fluid w-50 m-5 " src={pic} alt={pic} />
      ))}
    </div>
  );
};

export default Product;
