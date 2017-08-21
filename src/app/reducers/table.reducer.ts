import * as layout from '../actions/table.action';
import {TableState} from '../actions/table.action';


export interface State {
  tableState: TableState;
}

const initialState: State = {
  tableState: TableState.Thumbnail,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CHANGE_VIEW:
      return {
        tableState: action.payload
      };

    default:
      return state;
  }
}

export const getTableState = (state: State) => state.tableState;