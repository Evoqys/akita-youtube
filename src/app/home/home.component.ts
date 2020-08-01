import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoQuery } from '../state/query';
import { TodoStore } from '../state/store';
import { filter, switchMap, take } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  todos = [];

  constructor(private router: Router,
              private todoQuery: TodoQuery,
              private todoStore: TodoStore,
              private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.todoQuery.getIsLoading().subscribe(res => this.loading = res);
    this.todoQuery.getTodos().subscribe(res => this.todos = res);
    this.todoQuery.getLoaded().pipe(
      take(1),
      filter(res => !res),
      switchMap(() => {
        this.todoStore.setLoading(true);
        return this.apiService.getTodos();
      })
    ).subscribe(res => {
      this.todoStore.update(state => {
        return {
          todos: res,
          isLoaded: true,
        };
      });
      this.todoStore.setLoading(false);
    }, err => {
      console.log(err);
      this.todoStore.setLoading(false);
    });
  }

  addTodo() {
    this.router.navigateByUrl('/add-todo');
  }

}
