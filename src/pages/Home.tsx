import { IonAlert, IonList,IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React from 'react';
import { urll } from '../url';

const login = (user : any) =>
{ console.log(urll+"/login?mail="+user.email+"&&motdepasse="+user.motdepasse);
  return axios.get(urll+"/login?mail="+user.email+"&&motdepasse="+user.motdepasse,{
  }).then((data) => 
    {
      console.log(data);
      const status = data.data.idutilisateur;
      console.log(status);
      sessionStorage.setItem("utilisateur",(data.data.idutilisateur));
      sessionStorage.setItem("solde",(data.data.solde));
      sessionStorage.setItem("prenom",(data.data.prenom));
      localStorage.setItem("token",data.data.token);
      //  alert(localStorage.getItem("token"));
      window.location.replace( "/mesencheres");
    }).catch((err) => {
      console.log("error");
      const status = err.response.status;
      console.log(err.response.data.message);
      return err.response.data.message;
    })
}


const Home: React.FC = () => {
  sessionStorage.clear();
  localStorage.clear()
  const [email,setEmail] = React.useState("");
  const [motdepasse,setMotdepasse] = React.useState("");
  const [error,setError] = React.useState("");
  const user = {
    email : email,
    motdepasse : motdepasse
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonLabel>{error}</IonLabel>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='countainer'>
        <form>
        <IonList>
        <IonItem>
          <IonLabel position='floating'>email</IonLabel>
          <IonInput required type='email' value="rova@gmail.com" onIonInput={(e:any) => setEmail(e.target.value)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>mot de passe</IonLabel>
          <IonInput required type='password' value="rova1234" onIonInput={(e:any) => setMotdepasse(e.target.value)}></IonInput>
        </IonItem>
        <br></br>
        <IonButton disabled={false} expand="block" onClick={() => login(user).catch(err => {  })}>Se Connecter</IonButton>
        
      </IonList>
            </form>
            <a href='/inscription'>S'inscrire</a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;