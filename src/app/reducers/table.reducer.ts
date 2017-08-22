import * as layout from '../actions/table.action';
import {TableState} from '../actions/table.action';


export interface State {
  tableView: TableState;
  leftNavVisible: boolean;
}

const initialState: State = {
  tableView: TableState.Thumbnail,
  leftNavVisible: true
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CHANGE_VIEW:
      return {
        tableView: action.payload,
        leftNavVisible: state.leftNavVisible
      };
    case layout.TOOGLE_SIDELOCK:
      return {
        tableView: state.tableView,
        leftNavVisible: !state.leftNavVisible
      };
    default:
      return state;
  }
}

export const getTableView = (state: State) => state.tableView;
export const getSideLockState = (state: State) => state.leftNavVisible;