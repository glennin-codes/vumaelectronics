import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer'
import { client } from "../lib/client";

const AppContext = createContext();
// Compose the URL for your project's endpoint and add the query
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  bannerImages:[],
  bannerIsLoading:false,
 topImagesGrid:[],
 topImageIsLoading:false ,
 bottomImagesGrid:[],
 bottomImageIsLoading:false ,

};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  ////fetching from sanit, getSingleProduct and products
  // actions.js

  const getALLProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const query = '*[_type == "product"]';
      const products = await client.fetch(query);

dispatch({ type: "SET_API_DATA", payload: products});
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
 

  const getSingleProduct = async (slug) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const query = `*[_type == "product" && slug.current == $slug][0]`;
      const singleProduct = await client.fetch(query, { slug });

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  ////bannerSlyderImages
  const getBannerSlyderImages=async()=>{
    dispatch({type:"Set_banner_loading"})
   try {
    const query=`*[_type == "banner-slyder"]`;
    const bannerSlyderImages= await client.fetch(query);
    dispatch({type: "SET_BANNER_IMAGES",payload:bannerSlyderImages});
   } catch (error) {
    dispatch({type: " set_banner_error"})
   }
  }

   
  const getTopImages=async()=>{
    dispatch({type:"Set_TopImages_loading"})
   try {
    const query=`*[_type == "TopGridCategoryImages"]`;
    const TopImagesGrid= await client.fetch(query);
    dispatch({type: "SET_Top_IMAGES",payload:TopImagesGrid});
   } catch (error) {
    dispatch({type: " set_TopImages_error"})
   }
  }
  const getBottomImages=async()=>{
    dispatch({type:"Set_BottomImages_loading"})
   try {
    const query=`*[_type == "BottomGridCategoryImages"]`;
    const bottomImagesGrid= await client.fetch(query);
    dispatch({type: "SET_Bottom_IMAGES",payload:bottomImagesGrid});
   } catch (error) {
    dispatch({type: " set_bottomImages_error"})
   }
  }
  useEffect(() => {
    getALLProducts();
    getBannerSlyderImages();
    getTopImages();
    getBottomImages()
  }, []);


  return (
    <AppContext.Provider value={{ ...state,getALLProducts, getSingleProduct,getBannerSlyderImages,getTopImages,getBottomImages}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
