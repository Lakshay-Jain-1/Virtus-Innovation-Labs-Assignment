import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    positions: {x:0,y:0,z:0},
    score:0
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    giveOut: (state,payload) => {
      state.positions=payload
    },
    score:(state,payload)=>{
          state.score+=payload
    }
  },
})


export const { giveOut,score } = positionSlice.actions

export default positionSlice.reducer