import { IonContent, IonHeader,IonButtons,IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListeE from '../components/ListeE';
import Menu from '../components/Menu';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Recharg from '../components/Rechargement';
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
const RechargementC:React.FC=()=>{
  
    return(
     <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Rechargement</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rechargement compte</IonTitle>
          </IonToolbar>
        </IonHeader>
       <Recharg/>
      </IonContent>
    </IonPage>
    );
};
export default RechargementC;
