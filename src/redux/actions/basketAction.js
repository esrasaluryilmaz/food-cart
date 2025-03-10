import actionTypes from "../actionTypes";
import api from "../../utils/api";
import { v4 } from "uuid";

// Sepetteki verileri getir
const getCart = () => {
  return (dispatch) => {
    // Yuklenme
    dispatch({ type: actionTypes.CART_LOADING });

    //api'a istek at
    api
      .get("/cart")
      .then((res) =>
        dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: actionTypes.CART_ERROR, payload: err }));
  };
};
//Sepete urun ekle
const createItem = (item) => {
  return (dispatch) => {
    // Sepete eklenecek urunler icin bir obje olustur
    const newItem = {
      id: v4(),
      productId: item.id,
      title: item.title,
      price: item.price,
      photo: item.photo,
      amount: 1,
    };
    //Api ye istek at
    api.post("/cart", newItem).then(() =>
      // istek basarili olursa reduceri haber ver statei guncelle
      dispatch({ type: actionTypes.CREATE_ITEM, payload: newItem })
    );
  };
};
// Sepetten urun sil
const deleteItem = (id) => {
  return (dispatch) => {
    api
      .delete(`cart/${id}`)
      .then(() => dispatch({ type: actionTypes.DELETE_ITEM, payload: id }));
  };
};

//Sepetteki urunu guncelle
const updateItem = (id, newAmount) => {
  return (dispatch) => {
    api
      .patch(`/cart/${id}`, { amount: newAmount })
      .then((res) =>
        dispatch({ type: actionsTypes.UPDATE_ITEM, payload: res.data })
      );
  };
};

export { getCart, createItem, deleteItem, updateItem };
