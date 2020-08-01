import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { TodoStore } from '../state/store';
import { TodoQuery } from '../state/query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  form: FormGroup;

  constructor(private apiService: ApiService,
              private todoStore: TodoStore,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  addTodo() {
    console.log(this.form.value);
    this.todoStore.setLoading(true);
    this.apiService.addTodo(this.form.controls.title.value,
      this.form.controls.description.value).subscribe(res => {
      this.todoStore.update(state => {
        return {
          todos: [
            ...state.todos,
            res
          ]
        };
      });
      this.todoStore.setLoading(false);
      this.router.navigateByUrl('');
    });

  }

}
