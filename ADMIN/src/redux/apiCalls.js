import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
export const deleteProducts = async (id, dispatch) => {
  console.log("hello world");
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
export const updateProducts = async (id, product, dispatch) => {
  console.log("hello world");
  dispatch(updateProductStart());
  try {
    // await userRequest.delete(`/products/${id}`);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProducts = async (product, dispatch) => {
  console.log("hello world");
  dispatch(addProductStart());
  console.log("hello world");
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
