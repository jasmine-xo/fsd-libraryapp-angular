import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';

import { ToppicksComponent } from './toppicks/toppicks.component';
import { NewBookComponent } from './new-book/new-book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewAuthorComponent } from './new-author/new-author.component';


const routes: Routes = [{path:'',component:ToppicksComponent},
{path:'books',component:BooksComponent},
{path:'authors',component:AuthorsComponent},
{path:'addbooks',component:NewBookComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'addauthors',component:NewAuthorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
