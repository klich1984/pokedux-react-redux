import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  filled: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },

    setFilled: (state, action) => {
      state.filled = action.payload
    },
  },
})

export const { setValue, setFilled } = searchSlice.actions

export default searchSlice.reducer
