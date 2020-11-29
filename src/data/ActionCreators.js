import { ActionTypes } from './Types'
import { data } from './placeholderData'

export const loadData = dataType => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType,
    data: data[dataType]
  }
})