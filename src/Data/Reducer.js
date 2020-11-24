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

        default:
            return state;
    }

};

export default reducer;