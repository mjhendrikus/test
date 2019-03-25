import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PostComponent } from './post/post.component';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'team', component: TeamComponent},
  { path: 'post', component: PostComponent},
  {path: 'version', component: VersionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
