import { ActionReducer, Action } from "@ngrx/store";
import { State, intitialState } from "../state";
import { USERS_ADD } from "../actions/users";
import Moment from 'moment';

export const userReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {
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
