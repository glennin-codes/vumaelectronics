const filterReducer = (state, action) => {
   let { all_products } = state;
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curElem) => curElem.price);

  

  
        let maxPrice = Math.max(...priceArr);
 
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters: { ...state.filters, maxPrice, price: maxPrice,},
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
    
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
  
      case "GET_SORT_VALUE":
        // let userSortValue = document.getElementById("sort");
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        return {
          ...state,
          sorting_value: action.payload,
        };
      case "FILTER_PRODUCT_NAME":
        console.log(action.payload);
        return {
          ...state,
          filters: {
            ...state.filters,
            productName: action.payload
          },
        };
  
      case "SORTING_PRODUCTS":
        let newSortData;
        // let tempSortProduct = [...action.payload];
  
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];
  
        const sortingProducts = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }
  
          if (sorting_value === "highest") {
            return b.price - a.price;
          }
  
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }
  
          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);
  
        return {
          ...state,
          filter_products: newSortData,
        };
 
      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
  case "HOME_PRODUCTS":
   
      // Create a new filteredProducts object
   const filteredProducts = {};
   // get the unique values of each property
   const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
  
    return (newVal = [...new Set(newVal)]);
  };
  const categoryData = getUniqueData(all_products, "category");
     // Filter and store products for each category
     categoryData.forEach((category) => {
       let filteredCategoryProducts = [...all_products];

         filteredCategoryProducts = filteredCategoryProducts.filter(
           (curElem) => curElem.category === category
         );
    
         filteredProducts[category] = filteredCategoryProducts;
     });
     return{
      ...state,
      homeFiltered_Products:filteredProducts
     }
  

      case "FILTER_PRODUCTS":
       
        let tempFilterProduct = [...all_products];
  
        const { text, category,productName,brand, price } = state.filters;
    
  
        if (productName) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name === productName ||
            curElem.brand === productName ||
            curElem.category === productName
            ;
          });
         
        }
        if (text) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }
  
        if (category !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.category === category 
          );
        }
       
 
 
        if (brand !== "all") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.brand && curElem.brand.toLowerCase() === brand && brand.toLowerCase()
          );
        }
        
      
  
        if (price === 0) {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.price == price
          );
        } else {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.price <= price
          );
        }
        return {
          ...state,
          filter_products: tempFilterProduct,
        };
        case "CLEAR_SEARCH":
          return{...state , filters: {
            ...state.filters,
               productName: "",
          }}

      case "CLEAR_FILTERS":
        return {
          ...state,
          filters: {
            ...state.filters,
            text: "",
            category: "all",
            brand: "all",
            
            maxPrice: 0,
            price:state.filters.maxPrice ,
            minPrice: state.filters.maxPrice,
          },
        
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;