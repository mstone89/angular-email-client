import { EmailShowComponent } from './email-show/email-show.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: InboxHomeComponent,
        children: [
            { path: ':id', component: EmailShowComponent },
            { path: '', component: EmailPlaceholderComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
