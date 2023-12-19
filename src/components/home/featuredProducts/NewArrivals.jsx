import React, { useEffect, useState } from "react";
import ProductCard from "../../productcard/ProductCard";
import axios from "axios";
const NewArrivals = () => {
  const [newArrivalsProducts, setnewArrivalsProducts] = useState([]);

  useEffect(() => {
    fetchingNewArrivals();
  }, []);

  const fetchingNewArrivals = async () => {
    try {
      const response = await axios.get(
        'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&filter={%22sellerTag%22%3A%20%22new%20arrival%22}',
            {
          headers: {
            projectId: "4stjj1sb1x5a",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setnewArrivalsProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ProductCard products={newArrivalsProducts} />
    </div>
  );
};

export default NewArrivals;