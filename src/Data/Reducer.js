// this is basically the data layer

export const initialState = {
    basket: [],
};

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

// takes state of the application the action in question
// i.e adding or removing from the basket
const reducer = (state, action) => {

    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, // whatever the state originally was
                // changing from original state (...state.basket)
                // plus whatever we decided to add (action.item)
                basket: [...state.basket, action.item]
            };
        
            case 'REMOVE_FROM_BASKET':
                // first find the index you are trying to delete
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                // copy the basket into a temporary variable
                let newBasket = [...state.basket];

                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        'Can not remove product (id: ${action.id}) as it is not in the basket!'
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }

        default:
            return state;
    }

};

export default reducer;