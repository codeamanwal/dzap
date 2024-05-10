import Axios from 'axios'
import { BACKEND_URL } from '../constants';
Axios.defaults.baseURL = BACKEND_URL;

export const getAllCryptoList = async () =>  {
 const response = await Axios.get(`/getList`)
 return response.data
}

export const getAllCurrencies = async () =>  {
 const response = await Axios.get(`/getCurr`)
 return response.data
}

export const getExchangeRate = async (payload) =>  {
    const params = {
        source: payload.source,
        target: payload.target,
        amount: payload.amount
    }
    const response = await Axios.get(`/getExchangeRate`, {params})
    return response.data
   }
