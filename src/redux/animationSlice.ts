import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { editAnimation } from './animationThunk';
import { Animation } from '../interfaces/animation';

interface AnimationState {
  animation: Animation[];
  isLoading: boolean;
  isError: null | SerializedError;
}

let initialState: AnimationState = {
  isLoading: false,
  isError: null,
  animation: [
    {
      id: 1,
      text: 'X',
      minValue: '-100',
      maxValue: '100',
      step: '1',
      value: '0',
    },
    {
      id: 2,
      text: 'Y',
      minValue: '-100',
      maxValue: '100',
      step: '1',
      value: '0',
    },
    {
      id: 3,
      text: 'Opacity',
      minValue: '0',
      maxValue: '100',
      step: '1',
      value: '100',
    },
    {
      id: 4,
      text: 'Scale',
      minValue: '0',
      maxValue: '2',
      step: '0.1',
      value: '1',
    },
    {
      id: 5,
      text: 'Blur',
      minValue: '0',
      maxValue: '10',
      step: '1',
      value: '0',
    },
    {
      id: 6,
      text: 'Speed',
      minValue: '0.5',
      maxValue: '3',
      step: '0.1',
      value: '1',
    },
    {
      id: 7,
      text: 'Delay',
      minValue: '0',
      maxValue: '2',
      step: '0.1',
      value: '0',
    },
  ],
};

const AnimationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAnimation.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getAnimation.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.animation = action.payload;
    // });
    // builder.addCase(getAnimation.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = action.error;
    // });

    // builder.addCase(fetchAnimation.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(fetchAnimation.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.animation = action.payload;
    // });
    // builder.addCase(fetchAnimation.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = action.error;
    // });

    builder.addCase(editAnimation.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editAnimation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.animation = state.animation.map((item) => {
        //console.log(action.payload.value);
        if (item.id === action.payload.id) {
          return {
            ...item,
            value: action.payload.value,
          };
        }
        return item;
      });
    });
    builder.addCase(editAnimation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });
  },
});

export default AnimationSlice.reducer;
