import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import express from 'express';
import cors from 'cors';
import { RouterModule, Routes } from '@angular/router'
import { UsecsvAngularPluginModule } from '@usecsv/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TaskComponent } from './Task/components/task.component';
import { UpdateTaskComponent } from './Task/update-Task/update-task.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SprintComponent } from './Sprint/components/sprint.component';
import { UpdateSprintComponent } from './Sprint/update-Sprint/update-sprint.component';
import { CreateSprintComponent } from './Sprint/create-sprint/create-sprint.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TaskComponent,
    BoardComponent,

    UpdateTaskComponent,
    SprintComponent,
    UpdateSprintComponent,
    CreateSprintComponent,
  
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [
    provideHttpClient(withFetch())
    ,
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
