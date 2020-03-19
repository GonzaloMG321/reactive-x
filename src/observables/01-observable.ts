import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: value => {
        console.log('Next', value)
    },
    error: error => {
        console.log('Error', error)
    },
    complete: () => {
        console.info('Completado')
    }
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola mundo')
    subscriber.next('Emitiendo')

    subscriber.complete()

    subscriber.next('Emitiendo')
})

obs$.subscribe(observer)