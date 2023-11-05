import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/FilterReducer"
import { useProductContext } from "./FetchingDataContext";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  homeFiltered_Products:{},
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    productName:'',
    category: "all",
    company: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
 
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
const homeProducts=()=>{
 dispatch({type:"HOME_PRODUCTS"})
}
  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  const filterProductName = (name) => {
    console.log("filterProductName",name);
    return dispatch({ type: "FILTER_PRODUCT_NAME", payload:name });
  };

  // to clear the filter
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

 

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });

 dispatch({type:"HOME_PRODUCTS"})
  }, [products]);
   // to sort the product
   useEffect(() => {
 
      dispatch({ type: "FILTER_PRODUCTS" });
      dispatch({ type: "SORTING_PRODUCTS" });

  
  }, [products, state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        clearSearch,
        filterProductName,
        setGridView,
        homeProducts,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};