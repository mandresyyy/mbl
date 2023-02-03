import { IonContent, IonHeader,IonButtons,IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListeE from '../components/ListeE';
import Menu from '../components/Menu';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import AjoutE from '../components/AjoutE';

const PageajoutE:React.FC=()=>{
    const { name } = useParams<{ name: string; }>();
      return(
       <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Nouvelle enchere</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Nouvelle enchere</IonTitle>
            </IonToolbar>
          </IonHeader>
        <AjoutE/>
        </IonContent>
      </IonPage>
      );
  };
  export default PageajoutE;