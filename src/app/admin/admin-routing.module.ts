import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CardTopicComponent } from './util-components/card-topic/card-topic.component';
import { permissionsGuard } from '../core/guard/permissions.guard';
import { TopicDetailsComponent } from './util-components/topic-details/topic-details.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'list-course', component: ListCursosComponent },
            { path: 'list-course/detail-course/:id', component: CourseDetailComponent },
            { path: 'topic-detail', component: TopicDetailsComponent}
        ],
        canActivate: [permissionsGuard]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
