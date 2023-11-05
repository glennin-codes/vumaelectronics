import { useEffect, useState } from 'react';
import { client } from '../lib/client';


const Api = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const query = '*[_type == "product"]';
          const productsData = await client.fetch(query);
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Return the fetched products from this component
    return products;
  };
  
  export default Api;
