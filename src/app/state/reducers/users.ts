import { ActionReducer, Action } from "@ngrx/store";
import { State, intitialState } from "../store";
import { USERS_ADD } from "../actions/users";
import * as Moment from 'moment';

export interface CustomAction extends Action {
  type: string;
  data?: any;
}

export const userReducer = (state = intitialState, action: CustomAction) => {
  switch (action.type) {
    /**
     * Add Users to store
     */
    case USERS_ADD: {
      // Ignore action when empty payload
      if (!action.data || action.data.length < 1) return false;

      // Add age attr
      action.data.forEach((i) => { i.age = Moment().diff(i.dob, 'years'); });

      return {
        users: action.data,
      }
    }

    /**
     * Default - return state
     */
    default: {
      return state;
    }
  }
};
