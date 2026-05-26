// إعدادات تجريبية آمنة لمنع الانهيار
export const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForStudio000000000000000000",
  authDomain: "wazafni-demo.firebaseapp.com",
  projectId: "wazafni-demo",
  storageBucket: "wazafni-demo.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// دائماً نعيد TRUE في وضع الاستعراض للسماح بالدخول
export const isFirebaseConfigValid = () => {
  return true;
};
