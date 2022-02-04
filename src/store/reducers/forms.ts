import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormFieldType, FormItem } from '../../types';
import { getRandomId } from '../../utils';

export type FormsState = FormItem[];

const formsSliceState: FormsState = [
  {
    id: 1,
    name: 'Авто',
    description: 'Форма для работы с сущностью Авто',
    fields: [
      {
        name: 'model',
        label: 'Модель',
        type: FormFieldType.Text,
        rules: [{ required: true, message: 'Пожалуйста введите модель авто!' }],
      },
      {
        name: 'productionStartDate',
        label: 'Дата начала производства',
        type: FormFieldType.Date,
        rules: [{ required: true, message: 'Пожалуйста введите дату начала производства авто!' }],
      },
      {
        name: 'description',
        label: 'Описание',
        type: FormFieldType.TextArea,
        rules: [{ required: true, message: 'Пожалуйста введите описание авто!' }],
      }
    ]
  },
]

const formsSlice = createSlice({
  name: 'forms',
  initialState: formsSliceState,
  reducers: {
    saveForm: (state: FormsState, action: PayloadAction<FormItem>) => {
      if (action.payload.id === 0) {
        return [...state, {...action.payload, id: getRandomId() }]
      }
      return state.map(form => {
        return form.id !== action.payload.id ? form : action.payload;
      });
    },
    deleteForm: (state: FormsState, action: PayloadAction<number>) => {
      return state.filter(form => form.id !== action.payload);
    },
  },
})

export default formsSlice.reducer;
export const { saveForm, deleteForm } = formsSlice.actions;
