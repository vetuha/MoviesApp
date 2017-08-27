import * as layout from '../actions/table.action';
import {TableState} from '../actions/table.action';


export interface State {
  tableView: TableState;
}

const initialState: State = {
  tableView: TableState.Thumbnail
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CHANGE_VIEW:
      const view = action.payload;
      return Object.assign({}, state, {
        tableView: view
      });
    default:
      return state;
  }
}

export const getTableView = (state: State) => state.tableView;