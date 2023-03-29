import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    appointment: {

    }
  },
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
    
    }
  }
)

export const {edit} = patientSlice.actions;
export const patientData = (state) => state.patient;
export default patientSlice.reducer;