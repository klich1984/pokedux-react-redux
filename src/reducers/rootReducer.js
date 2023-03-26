import { combineReducers } from 'redux'
import dataReducer from '../slices/dataSlice'

const rootRducer = combineReducers({
  data: dataReducer,
})

export default rootRducer
