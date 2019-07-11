import dispatcher from '../dispatcher';
import actionTypes from '../actionTypes';

export const loadFoos = async () => {
  dispatcher.dispatch({
    actionType: actionTypes.LOAD_FOOS,
    foos: await fetch('/api/foos').then(async response => await response.json())
  });
};
