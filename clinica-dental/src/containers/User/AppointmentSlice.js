import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
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

export const {edit} = appointmentSlice.actions;
export const appointmentData = (state) => state.appointment;
export default appointmentSlice.reducer;