import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setData: (state: any, action) => {
      current(state)
      state[action.payload.key] = action.payload.value
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setData,
} = rootSlice.actions

export default rootSlice.reducer
