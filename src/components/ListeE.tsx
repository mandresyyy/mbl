import { IonCard, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import GetData from "./GetData";
import {ReactSession} from "react-client-session";
interface Enchere{}

const ListeE:React.FC<Enchere>=()=>{
    //enchere service sy login namboariko
    var utilisateur=sessionStorage.getItem("utilisateur");// na le personne
    // var id=1;
    const{data,error}=GetData("enchereavecmax?idu="+utilisateur,"get",null);
    if(!sessionStorage.getItem("utilisateur")){
        window.location.replace("/home");
    }

    return(
        <IonCard>
        
            <IonList inset={true}>
                    <IonItem>
                        <IonLabel color="medium"><center><b>Date</b></center></IonLabel>
                        <IonLabel color="medium"><center><b>Produit</b></center></IonLabel>
                        <IonLabel color="medium"><center><b>Mise max</b></center></IonLabel>
                        <IonLabel color="medium"><center><b>Statut</b></center></IonLabel>
                    </IonItem>
                
                   {Array.isArray(data) ? data.map((liste)=>{
                  let date= new Date(liste.enchere.debut).toLocaleString(
                    "fr-FR",
                            {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                       
                            }
                    
                  );
                  let lera= new Date(liste.enchere.debut).toLocaleString(
                    "fr-FR",
                            {
                            hour: "numeric",
                            minute: "numeric",
                            }
                    
                  );
                    let sta="Fini"
                    let coul="warning"
                    if(liste.enchere.statut==0){
                        sta="En cours"
                        coul="success"

                    }
                    return(
                        <IonItem>
                            <IonLabel><center>{date}<br></br>{lera}</center></IonLabel>
                            <IonLabel><center>{liste.enchere.nom}</center></IonLabel>
                            <IonLabel><center>AR {liste.max}</center></IonLabel>
                            <IonLabel color={coul} ><center>{sta}</center></IonLabel>
                        </IonItem>
                   )}):"Pas d'enchere"}

                   
                  
            </IonList>
            </IonCard>
    );

};

export default ListeE;