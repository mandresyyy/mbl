import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import React from "react";
import { urll } from "../url";

const inscription = (user : any) =>
{
  return axios.post(urll+"/inscrire",{
    nom : user.nom,
    prenom : user.prenom,
    datenaissance: user.datenaissance,
    email : user.email,
    motdepasse : user.motdepasse
  }).then((data) => {
    console.log(data);
    window.location.href = "/home";
  }).catch((err) => console.log(err));
}

const Inscription: React.FC = () => {
  const [email,setEmail] = React.useState("");
  const [nom,setNom] = React.useState("");
  const [prenom,setPrenom] = React.useState("");
  const [datenaissance,setDatenaissance] = React.useState("");
  const [motdepasse,setModepasse] = React.useState("");
  const utilisateur = {
    nom : nom,
    prenom : prenom,
    datenaissance : datenaissance,
    email : email,
    motdepasse : motdepasse
  };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Page d'inscription</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Page d'inscription</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel position='floating'>Nom</IonLabel>
            <IonInput required type='text' onIonInput={(e:any) => setNom(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Prenom</IonLabel>
            <IonInput required type='text' onIonInput={(e:any) => setPrenom(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Date naissance</IonLabel>
            <IonInput required type='date' onIonInput={(e:any) => setDatenaissance(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Email</IonLabel>
            <IonInput required type='text' onIonInput={(e:any) => setEmail(e.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Mot de passe </IonLabel>
            <IonInput required type='password' onIonInput={(e:any) => setModepasse(e.target.value)}></IonInput>
          </IonItem>
          <IonItem><IonButton onClick={() => inscription(utilisateur)}>S'inscrire</IonButton></IonItem>
        </IonContent>
      </IonPage>
    );
  };

export default Inscription;