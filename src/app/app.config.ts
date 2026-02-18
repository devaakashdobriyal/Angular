import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXb443OxDtAhX6R5KVl9VViPyvK6qkTks",
  authDomain: "actionfigure-management-system.firebaseapp.com",
  projectId: "actionfigure-management-system",
  storageBucket: "actionfigure-management-system.firebasestorage.app",
  messagingSenderId: "984522799582",
  appId: "1:984522799582:web:87fc227d6942a22639c54f",
  measurementId: "G-PWV5XQBQE6"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
     //provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
