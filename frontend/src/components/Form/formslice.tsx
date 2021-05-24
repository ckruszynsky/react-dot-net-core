import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';
import { Errors } from './Errors';
import { Touched } from './Touched';
import { Values } from './Values';

export interface FormState {
    values: Values;
    errors: Errors;
    touched: Touched;
    submitting:boolean;
    submitted:boolean;
    submitError:boolean;
};

const initialFormState: FormState = {
    values : {},
    errors: {},
    touched: {},
    submitting: false,
    submitted: false,
    submitError: false
};

interface FieldPayload {
    fieldName: string; 
    value: any;
}

export const formsSlice = createSlice({
    name:'form',
    initialState: initialFormState,
    reducers: {
        setValues: (state, action:PayloadAction<FieldPayload>) => {
           state.values = {...state.values,[action.payload.fieldName]: action.payload.value};
        },
        clearValues: (state) => {
            state.values = {};
        },
        setTouched: (state,action:PayloadAction<Touched>) =>{           
            state.touched = action.payload;
        },
        setErrors: (state, action:PayloadAction<Errors>) => {
            state.errors = action.payload;
        },
        setSubmitted: (state, action:PayloadAction<boolean>) => {
            state.submitted = action.payload;
        },
        setSubmitting: (state, action:PayloadAction<boolean>) => {
            state.submitting = action.payload;
        },
        setSubmitError: (state, action:PayloadAction<boolean>) => {
            state.submitError = action.payload;
        }
    }
});

export default formsSlice.reducer;
export const { setValues, setTouched, setErrors, setSubmitted, setSubmitting, setSubmitError, clearValues } = formsSlice.actions;

export const selectValues = (state : RootState) => state.forms.values;
export const selectTouched = (state: RootState) => state.forms.touched;
export const selectErrors = (state: RootState) => state.forms.errors;
export const selectSubmitted = (state:RootState) => state.forms.submitted;
export const selectSubmitting = (state:RootState) => state.forms.submitting;
export const selectSubmitError = (state:RootState) => state.forms.submitError;



