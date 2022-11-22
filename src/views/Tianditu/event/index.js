/**
 * 处理组件事件
 */

export default class Event {
  constructor() {
    this._listeners = {};
  }
  on(event, cb, scope = null) {
    if (!this._listeners[event]) this._listeners[event] = [];
    let cbs = this._listeners[event];
    let wanted = cbs.find(cb === cb);
    if (wanted) {
      return;
    }
    this._listeners[event].push({
      cb,
      scope,
    });
  }
  emit(event, ...args) {
    if (this._listeners[event] && this._listeners[event].length > 0) {
      this._listeners[event].forEach((item) => {
        let { cb, scope } = item;
        cb.apply(scope, args);
      });
    }
  }
  remove(event, cb) {
    let target = this._listeners[event];
    if (target && target.length > 0) {
      let wantIndex = target.findIndex(cb === cb);
      if (wantIndex === -1) {
        return;
      }
      this._listeners[event].splice(wantIndex, 1);
    }
  }
}
