import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addCircle, cardSharp, hammerSharp, powerSharp } from 'ionicons/icons';
import './Menu.css';
import {ReactSession} from "react-client-session";
import GetData from './GetData';
import { urll } from '../url';
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Ajout enchere',
    url: '/ajoutEnchere',
    iosIcon: addCircle,
    mdIcon: addCircle
  },
  {
    title: 'Mes Encheres',
    url: '/mesencheres',
    iosIcon: hammerSharp,
    mdIcon: hammerSharp
  },
  {
    title: 'Rechargement',
    url: '/rechargement',
    iosIcon: cardSharp,
    mdIcon: cardSharp
  },
  {
    title: 'Se deconnecter',
    url: '/home',
    iosIcon: powerSharp,
    mdIcon: powerSharp
  },
  
];


const Menu: React.FC = () => {
  const location = useLocation();
  var utilisateura=JSON.stringify(sessionStorage.getItem("utilisateurako"));
  const{data,error}=GetData("checkTous","get",null);

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader >{sessionStorage.getItem("prenom")}</IonListHeader>
          <br></br>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
