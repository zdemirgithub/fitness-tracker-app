## **1. Install Required Tools**

### **Install Expo CLI**
```bash
npm install -g expo-cli
```

### **Create a New React Native Project**
```bash
expo init fitness-tracker-app
cd fitness-tracker-app
```

### **Install Required Libraries**
```bash
npm install firebase react-navigation react-native-async-storage/async-storage react-native-vector-icons
expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

---

## **2. Set Up Firebase**

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add an **iOS** and **Android** app to your Firebase project.
4. Download the `google-services.json` and `GoogleService-Info.plist` files and add them to the **android/app** and **ios** folders, respectively.
5. Enable **Email/Password Authentication** and **Firestore Database** in the Firebase console.

---

## **3. Firebase Configuration**

### **src/services/firebase.js**
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

> Replace `YOUR_API_KEY`, `YOUR_PROJECT_ID`, etc., with your Firebase project's credentials.

---

