import { combineReducers } from 'redux'
import dataReducer from '../slices/dataSlice'
import uiReducer from '../slices/uiSlice'

const rootRducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
})

export default rootRducer
