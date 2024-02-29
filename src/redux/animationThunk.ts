import { createAsyncThunk } from '@reduxjs/toolkit';

//-------имитируем запрос на получение данных с сервера
// export const getAnimation = createAsyncThunk('animation/get');

// export const fetchAnimation = createAsyncThunk('animation/fetch');

export const editAnimation = createAsyncThunk(
  'animation/editValue',
  async (data: {value: string, id: number}) => {
    const response: any = await new Promise((res) => {
      res(data);
    });
    //console.log(response);
    return response;
  }
);
