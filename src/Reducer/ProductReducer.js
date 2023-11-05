const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        // allCategories:action.payload
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
   case "Set_banner_loading" :
    return {
      ...state ,
      bannerIsLoading:true
    }
    case "SET_BANNER_IMAGES":
      return {
        ...state,
        bannerIsLoading:false,
        bannerImages:action.payload
      }
      case " set_banner_error" :
        return{
          ...state,
          bannerIsLoading:false,
          isError:true
        }
        case "Set_TopImages_loading" :
          return {
            ...state ,
            topImageIsLoading:true
          }
        case "SET_Top_IMAGES":
          return {
            ...state,
            topImageIsLoading:false,
            topImagesGrid:action.payload
          }
      case "set_TopImages_error" :
        return{
          ...state,
          topImageIsLoading:false,
          isError:true
        }
        case "Set_BottomImages_loading" :
          return {
            ...state ,
            bottomImageIsLoading:true
          }
        case "SET_Bottom_IMAGES":
          return {
            ...state,
            bottomImageIsLoading:false,
            bottomImagesGrid:action.payload
          }
      case "set_bottomImages_error" :
        return{
          ...state,
          bottomImageIsLoading:false,
          isError:true
        }
  
    default:
      return state;
  }
};

export default ProductReducer;
