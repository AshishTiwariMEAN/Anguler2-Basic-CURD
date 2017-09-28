import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentsService } from './students.service';


/**
 * Routes Configuration
 */
const appRoutes: Routes = [
  { path: '', component: StudentlistComponent},
  { path: 'add', component: StudentaddComponent},
  { path: 'add/:id', component: StudentaddComponent},
  { path: '**', component: StudentlistComponent }
];

/**
 * Routes initilization in routes module
 */
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentaddComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
