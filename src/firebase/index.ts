
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { initializeFirestore, getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

export function initializeFirebase() {
  try {
    if (getApps().length > 0) {
      app = getApp();
    } else {
      app = initializeApp(firebaseConfig);
    }
    
    // نستخدم Long Polling لضمان تجاوز قيود الشبكة في بيئات العمل السحابية
    if (!db) {
      db = initializeFirestore(app, {
        experimentalForceLongPolling: true,
      });
    } else {
      db = getFirestore(app);
    }
    
    auth = getAuth(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return { app: {} as any, db: null as any, auth: null as any };
  }
  
  return { app, db, auth };
}

export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
