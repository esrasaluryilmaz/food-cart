import api from "../../utils/api";
import actionTypes from "../actionTypes";

const getRestaurants = (payload) => {
  return (dispatch) => {
    //Yuklenme durumu
    dispatch({ type: actionTypes.REST_LOADING });
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({
          // Veri gelme durumu
          type: actionTypes.REST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        // Hata Durumu
        dispatch({ type: actionTypes.REST_ERROR, payload: err.message });
      });
  };
};

export { getRestaurants };
