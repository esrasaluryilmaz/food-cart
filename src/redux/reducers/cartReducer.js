import actionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Yuklenme
    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    //Hata
    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: payload.message };

    // Basari
    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: payload };

    // Eleman ekle
    case actionTypes.CREATE_ITEM:
      return { ...state, cart: state.cart.concat(payload) };

    // Eleman sil
    case actionTypes.DELETE_ITEM:
      const filtred = state.cart.filter((i) => i.id != payload);
      return { ...state, cart: filtred };
      return state;
    // Eleman guncelle
    case actionTypes.UPDATE_ITEM:
      const updated = state.cart.map((i) =>
        i.id === payload.id ? payload : i
      );
      return { ...state, cart: updated };

    default:
      return state;
  }
};
export default cartReducer;
