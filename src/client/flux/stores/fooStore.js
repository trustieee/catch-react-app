import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actionTypes';

const CHANGE_EVENT = 'CHANGE';
let _foos = [];

class FooStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange(callback) {
    this.emit(CHANGE_EVENT, callback);
  }

  getFoos() {
    return _foos;
  }
}

const _store = new FooStore();

dispatcher.register(function(action) {
  switch (action.actionType) {
    case actionTypes.LOAD_FOOS:
      _foos = action.foos;

      _store.emitChange();
      break;
    default: // do nothing
  }
});

export default _store;
