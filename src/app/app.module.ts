import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
