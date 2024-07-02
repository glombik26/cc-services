import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2qwWQH6-tP-rrw0R3UoJmhQk7dAUABF4",
  authDomain: "cc-services-296ce.firebaseapp.com",
  projectId: "cc-services-296ce",
  storageBucket: "cc-services-296ce.appspot.com",
  messagingSenderId: "413065106728",
  appId: "1:413065106728:web:1a933ed8a9352ee33c6c1d",
  measurementId: "G-FYK0W3VR9C"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
};
