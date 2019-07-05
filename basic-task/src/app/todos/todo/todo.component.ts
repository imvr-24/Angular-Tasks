import { TodoModel } from './../../models/todo.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  todo: {id: number};
  paramSubscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.todo = {
      id: this.route.snapshot.params['id']
    };

    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.todo.id = params.id;
      }
      );
    }

    ngOnDestroy() {
      this.paramSubscription.unsubscribe();
    }
  }


