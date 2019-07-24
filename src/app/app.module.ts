import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

import { APP_ROUTES } from './app.routes';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
	declarations: [ AppComponent, FotosComponent, CargaComponent, NgDropFilesDirective ],
	imports: [
		BrowserModule,
		APP_ROUTES,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule // imports firebase/storage only needed for storage features
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
