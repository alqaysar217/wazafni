
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig, isFirebaseConfigValid } from './config';

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

export function initializeFirebase() {
  try {
    if (getApps().length > 0) {
      app = getApp();
    } else {
      // نستخدم مفتاحاً وهمياً بصيغة صحيحة فقط لمنع SDK من الانهيار عند البدء
      // إذا كان المفتاح الحقيقي مفقوداً
      const safeConfig = isFirebaseConfigValid() 
        ? firebaseConfig 
        : { ...firebaseConfig, apiKey: firebaseConfig.apiKey || "AIzaSyDummyKeyForStudio000000000000000000" };
        
      app = initializeApp(safeConfig);
    }
    
    db = getFirestore(app);
    auth = getAuth(app);
  } catch (error) {
    console.error("Firebase semi-initialization for safety:", error);
    // في حال الفشل التام، نعيد كائنات فارغة لتجنب كسر واجهة التطبيق بالكامل
    return { app: {} as any, db: null as any, auth: null as any };
  }
  
  return { app, db, auth };
}

export * from './provider';
export * from './client-provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
