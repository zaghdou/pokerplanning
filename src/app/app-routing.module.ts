import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './Task/components/task.component';
import { UpdateTaskComponent } from './Task/update-Task/update-task.component';
import { SprintComponent } from './Sprint/components/sprint.component';
import { UpdateSprintComponent } from './Sprint/update-Sprint/update-sprint.component';
import { CreateSprintComponent } from './Sprint/create-sprint/create-sprint.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'task', component: TaskComponent},
  { path: 'updateTask/:id', component: UpdateTaskComponent },
  { path: 'sprint', component: SprintComponent },
  { path: 'updateSprint/:id', component: UpdateSprintComponent },
  { path: 'createSprint/:id', component: CreateSprintComponent },
  { path: 'board', component: BoardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
