import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();

  return (
    <section className='section product'>
      <h2>producto con id {params}</h2>
    </section>
  );
};

export default SingleProduct;