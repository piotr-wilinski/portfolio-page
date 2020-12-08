import { ActionTypes } from './Types'
// import { data } from './placeholderData'
import { RestDataSource } from './RestDataSource'

const dataSource = new RestDataSource()

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType)
    .then(response => ({
      dataType,
      data: response.data
    }))
})