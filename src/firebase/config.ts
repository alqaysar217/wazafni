/**
 * @fileOverview Firebase configuration using real project credentials.
 */

export const firebaseConfig = {
  apiKey: "AIzaSyBggr23kXxBfZj0jspEgvC6_aUzi4R7XYA",
  authDomain: "studio-8977815245-51adb.firebaseapp.com",
  projectId: "studio-8977815245-51adb",
  storageBucket: "studio-8977815245-51adb.firebasestorage.app",
  messagingSenderId: "202247792643",
  appId: "1:202247792643:web:85b0598faa8107a3944636"
};

/**
 * Validates if the Firebase configuration is set.
 * Returns true since we now have real values.
 */
export const isFirebaseConfigValid = () => {
  return !!firebaseConfig.apiKey && firebaseConfig.apiKey !== "AIzaSyDummyKeyForStudio000000000000000000";
};
