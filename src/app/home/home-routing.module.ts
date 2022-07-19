import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path:'workouts',
        loadChildren: () => import('../pages/workouts/workouts.module').then( m => m.WorkoutsPageModule)
      },
      {
        path:'search',
        loadChildren: () => import('../pages/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path:'article',
        loadChildren: () => import('../pages/article/article.module').then( m => m.ArticlePageModule)
      },
      {
        path:'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/home/workouts',
        pathMatch:'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/workouts',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
