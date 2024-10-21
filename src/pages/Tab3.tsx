import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Security</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">security</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent color={"light"} className="ion-padding">
              <p>
                Android application security is crucial to protect user data, prevent unauthorized access, and ensure the integrity of applications. Key aspects of Android application security include: <br />

                  1. **Permissions**: Android apps must declare the permissions they require, such as access to the camera, location, or contacts. Users can then grant or deny these permissions, helping to control access to sensitive information. <br />

                  2. **Data Storage and Encryption**: Sensitive data should be encrypted both in transit and at rest. Android provides APIs for secure storage options like `SharedPreferences` and `KeyStore` for managing cryptographic keys. <br />

                  3. **Network Security**: Secure communication between an app and a server is critical. Using HTTPS with SSL/TLS ensures that data is encrypted during transit. Android also supports network security configurations that allow developers to enforce stricter security policies. <br />

                  4. **Authentication**: Strong user authentication mechanisms, such as biometric authentication (fingerprint, facial recognition), OAuth, and token-based authentication, help secure access to app features and user accounts. <br />

                  5. **Code Obfuscation**: Obfuscation tools like ProGuard help make the code harder to reverse-engineer, protecting intellectual property and sensitive information in the codebase from attackers. <br />

                  6. **Application Sandboxing**: Each Android app runs in a separate process, and the system uses user-based permissions to prevent one app from accessing another app's data without permission. This provides a layer of isolation between apps. <br />

                  7. **Security Best Practices**: Developers should adhere to security best practices, such as input validation to prevent SQL injection and cross-site scripting (XSS) attacks, minimizing the use of deprecated APIs, and regularly updating dependencies to patch known vulnerabilities. <br />

                  8. **Security Testing**: Regular security testing, including static and dynamic analysis, vulnerability assessment, and penetration testing, helps identify and fix potential security issues in the app before release.</p>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
