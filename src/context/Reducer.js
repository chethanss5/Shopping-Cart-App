export const cartReducer = (state, action) => {
   switch (action.type) {
    case "ADD_TO_CART":
        return {...state, cart: [...state.cart, {...action.payload, qty:3}] }
    case "REMOVE_FROM_CART":
            return {...state, cart:state.cart.filter(c => c.id !== action.payload.id), 
            }    
    default:
        return state;
  }
};    

export const prodReducer = (state, action) => {
    switch(action.type){
        case 'SORT_BY_PRICE':
            return {...state, sort: action.payload}
        case 'FILTER_BY_RATING':
                return {...state, byRating: action.payload}
         case 'FILTER_BY_SEARCH':
            return {...state, searchQuery: action.payload}
        case 'CLEAR_FILTERS':
                return { 
                    byRating: 0,
                    searchQuery: "",
                }          
            
        default:
            return state;
    }
}; 