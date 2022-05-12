import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditeProfilePageRoutingModule } from './edite-profile-routing.module';

import { EditeProfilePage } from './edite-profile.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditeProfilePageRoutingModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFirestoreModule
    

  ],
 
  declarations: [EditeProfilePage]
})
export class EditeProfilePageModule {}
