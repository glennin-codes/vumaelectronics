import React, { useEffect } from 'react'
import { useFilterContext } from '../../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
import { useProductContext } from '../../context/FetchingDataContext';
import { useLocation } from 'react-router-dom';

const ProductList = ({}) => {
    const { products,getALLProducts} = useProductContext();
    const { filter_products, filterProductName, clearFilters,grid_view, sorting_value, filters, updateFilterValue,dispatch } = useFilterContext();
    // Trigger the filtering and sorting actions when filters, sorting_value, or products change
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get('q')  
 
    useEffect(()=>{
    if( !products){
        getALLProducts()
      }
  },[])
  
  
  
    useEffect(() => {
       
           dispatch({ type: 'FILTER_PRODUCTS' });
      dispatch({ type: 'SORTING_PRODUCTS' });
  
    }, [filters, sorting_value, products,productName]);



useEffect(()=>{
    
    if(productName){
        filterProductName(productName) ;
       }

},[productName])
 

    if(grid_view===true){
        return <GridView products={filter_products} />
    }

    if(grid_view=== false){
        return <ListView products={filter_products} />
    }
}

export default ProductList