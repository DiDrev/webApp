import { Component } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
	tasks!: Itask[];

	constructor(private taskService: TasksService){
		taskService.getTasks().subscribe({
			next: (results) => {
				this.tasks = results;
			},
			error: (err) => {
				console.log(err);
				alert('Something went wrong:(');
			}
		});
	}
}
