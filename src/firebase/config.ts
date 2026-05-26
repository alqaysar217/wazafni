
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// وظيفة للتحقق من جاهزية الإعدادات وتجنب الانهيار
export const isFirebaseConfigValid = () => {
  const key = firebaseConfig.apiKey;
  return !!(
    key && 
    key.length > 10 && 
    key.startsWith("AIza") &&
    firebaseConfig.projectId
  );
};
