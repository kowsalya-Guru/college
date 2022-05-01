import { Routes } from '@angular/router';
// import { ExamScheduleComponent } from './exam-schedule.component';
import { TaskComponent } from './task.component';

// import { UserDetailsComponent } from './user-details.component';

export const TaskRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'staff-task',
      component: TaskComponent
  }]
}];
