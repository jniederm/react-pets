/*
Documentation        http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
RxJS Marbles         http://rxmarbles.com
Animated playground  https://rxviz.com/
 */

const Rx = require('rxjs')

Rx.Observable.of('a')
  .subscribe(x => console.log('example 1', x))

const observable1 = Rx.Observable.of('a')
const observable2 = Rx.Observable.of('b')
observable1.merge(observable2)
  .subscribe(x => console.log('merged observables', x))

Rx.Observable
  .interval(1000)                                  // generate new event each 1000ms, value is ordinal number of the event
  .do(x => console.log('inspection point 1', x))   // allows inspection of stream without affecting it
  .map(x => x + 1)                                 // value transformation
  .do(x => console.log('inspection point 2', x))
  .take(3)                                         // take first n events, drop all other
  .subscribe(x => console.log('mapped items', x))

Rx.Observable.of(['a', 'b'])
  .mergeAll()                                      // unwraps/flatterns arrays, Observables, or Promises
  .subscribe(x => console.log('unwrapped array', x))

Rx.Observable.of(Promise.resolve('a'))
  .mergeAll()
  .subscribe(x => console.log('unwrapped promise', x))

Rx.Observable.of(Promise.resolve('a'))
  .mergeAll()
  .subscribe(x => console.log('unwrapped promise', x))

Rx.Observable
  .interval(500)
  .do(x => console.log('raw events', x))
  .throttleTime(1000)                             // after event passing through, all event are discarded for 1000ms
  .take(3)
  .subscribe(x => console.log('throttled events', x))

Rx.Observable
  .from([1,2])
  .mapTo('a')                                      // mapping to a single value
  .subscribe(x => console.log('mapped to "a"', x))
