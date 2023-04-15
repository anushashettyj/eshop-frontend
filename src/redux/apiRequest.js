import { loginStart, loginSuccess, loginError } from './user.js';
import { processReq,
  handleError, 
  getAllProducts, 
} from './product.js';
import { publicRequest } from '../requestProcessor';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginError(err));
  }
}

export const getProducts = async (dispatch) => {
  dispatch(processReq());
  try {
    const res = await publicRequest.get('/product/find');
    dispatch(getAllProducts(res.data));
  } catch (err) {
    dispatch(handleError(err));
  }
}
