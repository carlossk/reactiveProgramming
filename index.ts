import { Observable } from 'rxjs';
 
const observable = new Observable(subscriber => {
    console.log('Hello');
    
    setTimeout(()=>{
        subscriber.next(42);

    },4000);
});
 
observable.subscribe({
  next(x) { 
      console.log('value ' + x); 
    },
  error(err) { 
      console.error('something wrong occurred: ' + err); 
    },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

