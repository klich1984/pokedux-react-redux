import { SET_LOADING } from '../actions/types'
import { fromJS, setIn } from 'immutable'

const initialState = fromJS({
  loading: false,
})

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return setIn(state, ['loading'], action.payload)
    default:
      return state
  }
}
