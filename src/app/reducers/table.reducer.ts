import * as layout from '../actions/table.action';
import {TableState} from '../actions/table.action';


export interface State {
  tableState: TableState;
  leftNavVisible: boolean;
}

const initialState: State = {
  tableState: TableState.Thumbnail,
  leftNavVisible: true
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CHANGE_VIEW:
      return {
        tableState: action.payload,
        leftNavVisible: state.leftNavVisible
      };
    case layout.TOOGLE_SIDELOCK:
      return {
        tableState: state.tableState,
        leftNavVisible: !state.leftNavVisible
      };
    default:
      return state;
  }
}

export const getTableState = (state: State) => state.tableState;
export const getSideLockState = (state: State) => state.leftNavVisible;