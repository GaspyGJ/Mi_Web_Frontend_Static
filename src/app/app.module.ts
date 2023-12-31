import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/*Material */
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/*CDK*/
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EducacionComponent } from './Componentes/Secciones/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/Secciones/experiencia/experiencia.component';
import { HabilidadesComponent } from './Componentes/Secciones/habilidades/habilidades.component';
import { ProyectosComponent } from './Componentes/Secciones/proyectos/proyectos.component';
import { HomeComponent } from './Componentes/Secciones/home/home.component';
import { Card3DComponent } from './Componentes/card3-d/card3-d.component';

import { NgParticlesModule } from "ng-particles";
import { BentoComponent } from './Componentes/bento/bento.component';
import { NavegacionComponent } from './Componentes/Secciones/navegacion/navegacion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navegacion", component: NavegacionComponent },
  { path: "educacion", component: EducacionComponent },
  { path: "experiencia", component: ExperienciaComponent },
  { path: "habilidades", component: HabilidadesComponent },
  { path: "proyectos", component: ProyectosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    Card3DComponent,
    BentoComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*Material */
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    /*CDK*/
    DragDropModule,
    /*particles*/
    NgParticlesModule,
    /*Routes*/
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
