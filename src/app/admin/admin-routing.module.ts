import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { ListCursosComponent } from './list-cursos/list-cursos.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, 
        children: [
            { path: 'list-cursos', component: ListCursosComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
