import { provideRouter, RouterConfig }  from '@angular/router';
import { BookmarkComponent } from './bookmark.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/bookmark',
        pathMatch: 'full'
    },
    {
        path: 'index.html',
        redirectTo: '/bookmark',
        pathMatch: 'full'
    },
    {
        path: 'bookmark',
        component: BookmarkComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];