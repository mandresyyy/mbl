import { IonContent, IonHeader,IonButtons,IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListeE from '../components/ListeE';
import Menu from '../components/Menu';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
const MesEncheres:React.FC=()=>{
  const { name } = useParams<{ name: string; }>();
    return(
     <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mes encheres</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes encheres</IonTitle>
          </IonToolbar>
        </IonHeader>
       <ListeE/>
      </IonContent>
    </IonPage>
    );
};
export default MesEncheres;