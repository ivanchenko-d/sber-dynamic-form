import { createSlice, Dispatch, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { FormField, FormItem } from '../../types';

export type FormState = FormItem | null;

const formSliceState: FormState = {
  id: 0,
  name: '',
  description: '',
  fields: []
};

const formSlice = createSlice({
  name: 'form',
  initialState: formSliceState,
  reducers: {
    initForm: (state: FormState, action: PayloadAction<FormItem>) => {
      return action.payload;
      // return {...action.payload, id: action.payload.id ? action.payload.id : +nanoid(4) };
    },
    clearForm: (state: FormState) => {
      return formSliceState;
    },
    addField: (state: FormState, action: PayloadAction<FormField>) => {
      if (!state) return;
      state.fields = [...state.fields, action.payload];
    },
    deleteField: (state: FormState, action: PayloadAction<string>) => {
      if (!state) return;
      state.fields = state.fields.filter(field => field.name !== action.payload);
    },
  }
});

export default formSlice.reducer;
export const { initForm, clearForm, addField, deleteField } = formSlice.actions;

// const saveForm = () => {
//   return (dispatch: Dispatch) => {
//     dispatch()
//   }
// }
