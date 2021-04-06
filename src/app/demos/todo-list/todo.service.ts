import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { tap } from 'rxjs/operators';
import { Store } from './todo.store';

@Injectable()
export class TasksService {


    toggle(event: any) {
        this.http.put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
            .subscribe(() => {
                const value = this.store.Value.todolist;
                const todolist = value.map((task: Task) => {
                    if (event.task.id === task.id) {
                        return { ...task, ...event.task };
                    } else {
                        return task;
                    }
                });
                this.store.set('todolist',todolist); 
            })
    }

    constructor(private http: HttpClient, private store: Store) { }

    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>('http://localhost:3000/todolist')
        .pipe(tap(next => this.store.set('todolist', next)));

    /* getToDoList(): Observable<Task[]> {
      return this.http
        .get<Task[]>('http://localhost:3000/todolist');
    } */
}