import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { IUserData } from "./types/authType";
import { IRegisterFormValues } from "../../components/register/Register";

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const registerUser = createAsyncThunk(
  "registerUser",
  //вместо data придут данные из формы, когда мы их получение вызовем через dispatch
  async (data: IRegisterFormValues, thunkAPI) => {
    console.log("form data:", data);

    try {
      //поскольку post запрос, мы можем передать данные не в строке, а в отдельной переменной
      // в данном случае в data лежат данные из формы, мы их передаем в API
      const response: AxiosResponse<IUserData> = await axios.post(
        "/api/auth/register",
        data,
        );
      
      //сохраняем токен во внутр хранилище в браузере local storage
      // сохраненные в нем данные из него не будут стираться при перезагрузке страницы
      // localStorage.setItem('user-token', response.data.accessToken)
      
      console.log("response data:", response.data);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getUserWithToken = createAsyncThunk(               
//   "getUserWithToken",                                           
//   async (accessToken: string, thunkAPI) => {
//     try {
//       const response: AxiosResponse<IUserData> = await axios.get(
//         "/api/users/my-profile",
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       return response.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
