import { IonInput, IonItem, IonLabel,IonPage,IonContent,IonText,IonButton, IonNote,IonAlert } from "@ionic/react";
import { useState } from "react";
import axios from "axios";
import {ReactSession} from "react-client-session";
import { urll } from "../url";
interface Rechargement{}
const Recharg:React.FC<Rechargement>=()=>{
    const [recharge,setRecharge]=useState("");
    const [data, setData] = useState<Array<any>>([]) ;
    const [error, setError] =useState<any>(null);
    if(!sessionStorage.getItem("utilisateur")){
        window.location.replace("/home");
    }
    
    function demande(){
        let urli="/accounts/recharge"
       
        let json={
            "utilisateur":{
                "idutilisateur": sessionStorage.getItem("utilisateur")
            },
            "montant":recharge

        }
        console.log(json);
        const api=axios.create(
            {
                baseURL:urll
            }
        );
        api.post(urli,json)
        .then(res => {             
            setData(res.data)
         })
        .catch(error=>{
            setError(error)
         })
       alert("demande envoyé")
    }
    return(
       
        <form >
        <IonItem lines="none">
            <IonNote slot="end" color="success">Solde: AR {sessionStorage.getItem("solde")}</IonNote>
        </IonItem>
          <IonItem>
            <IonLabel position="floating" >Montant</IonLabel>
            <IonInput required type="number" placeholder="AR" onIonChange={(e:any)=>setRecharge(e.target.value)}></IonInput> 
          </IonItem>
         
          <IonButton expand="block" className="ion-margin-top" onClick={demande}>
            Valider
          </IonButton>
        </form>

   
    );
};

export default Recharg;