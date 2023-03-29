import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
  name: "doctor",
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

export const {edit} = doctorSlice.actions;
export const doctorData = (state) => state.doctor;
export default doctorSlice.reducer;