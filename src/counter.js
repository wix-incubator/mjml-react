export default class Counter {
  _count = 0;

  increment(n = 1) {
    this._count += n;
  }
}
