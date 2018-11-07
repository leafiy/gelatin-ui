/**
 * setTimout with pause, resume, cancel
 * usage: new Timer(cb,duration)
 */

class Timer {
  constructor(callback, duration) {
    this.callback = callback;
    this.duration = duration;
    this.triggerTime = this._now() + duration;
    this.timeId = this._start(callback, duration);
    this.timeLeft = 0;
  }

  _now() {
    return new Date().getTime();
  }

  _start(callback, duration) {
    return setTimeout(callback, duration);
  }

  getTimeLeft() {
    return this.triggerTime - this._now();
  }
  pause() {
    this.timeLeft = this.getTimeLeft();
    clearTimeout(this.timeId);
    this.timeId = null;
  }
  resume() {
    if (this.timeId == null) {
      this.timeId = this._start(this.callback, this.timeLeft);
    }
  }
  cancel() {
    clearTimeout(this.timeId);
    this.timeId = null;
  }
}

export default Timer;
