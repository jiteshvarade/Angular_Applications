import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

export const routes: Routes = [
    {path : "", component : MainContentComponent},
    {path : "submitpage", component : SubmitPageComponent}
];
