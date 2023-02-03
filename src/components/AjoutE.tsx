import { IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption } from "@ionic/react";
import { log } from "console";
import { useState,useEffect } from "react";
import GetData from './GetData';
import { urll } from "../url";
import axios from "axios";
import { push } from "ionicons/icons";

interface Formulaire_enchere{}
const AjoutE:React.FC<Formulaire_enchere>=()=>{
    if(!sessionStorage.getItem("utilisateur")){
        window.location.replace("/home");
    }
    const [categ,setcateg]=useState("");
    const [duree,setduree]=useState("");
    const[produit,setproduit]=useState("");
    const[desc,setdesc]=useState("");
    const[prix,setprix]=useState("");
    const{data,error}=GetData("categories","get",null);
    const [data2, setData2] = useState<Array<any>>([]) ;
    var photo=[''];
    const [idp, setidp] = useState("");
    useEffect(() => {
        const api = axios.create({
            baseURL: urll
        })
            api.get("durees")
            .then(res => {             
                setData2(res.data)
                //console.log(res.data)
             })

        }, [])
    function valider(){
        console.log(categ)
        console.log(duree)

        console.log(produit)
        console.log(desc)
        console.log(prix)
        console.log("photo"+photo)
        const api=axios.create({
            baseURL:urll,
           
        });
        let json={
            "utilisateur":{
                "idutilisateur":sessionStorage.getItem("utilisateur")
            },
            "categoire_enchere":{
                idcategorie_Enchere:categ
            },
            "duree_heure":{
                "idduree":duree
            },
            "nom":produit,
            "mise_minimale":prix,
            "status":0,
            "description":desc



        }
        api.post("/ajouterEnchere",json)
        .then(res => {             
            // idP=res.data
            console.log(res.data)
            setidp(res.data)
            // console.log("ty ki a"+idp)
            var phot={
                "image":photo,
                "idproduit":res.data
                
             }
             console.log(phot);
             api.post("/insertp",phot)
             .then(res => {  
               console.log("ato mety")
              })
             .catch(error=>{
                 console.log("ereeur")
              })
         })
        .catch(error=>{
           
         })
      
        
           window.location.replace("/mesencheres");
       
         
        
    }
    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        for (let i = 0; i < event.target.files!.length; i++) {
          const file = event.target.files![i];
          const reader = new FileReader();
          reader.onloadend = () => {
            let str=reader.result as string
            if(photo[0]==='')
            photo[0]=str.split(",")[1];
            else
              photo.push(str.split(",")[1]);
          };
          reader.readAsDataURL(file);
        }
      };
return(
    <div className="container">
            <form>
             <IonList>
                <IonItem>
                    <IonLabel position='stacked'>Categorie</IonLabel>
                    <IonSelect interface="popover" onIonChange={(e:any)=>setcateg(e.detail.value)}>
                        { 
                            data.map(lc=>{
                                return(
                                <IonSelectOption key={lc.idcategorie_enchere} value={lc.idcategorie_Enchere}>{lc.libelle}</IonSelectOption>
                                )
                    })
                       }   
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Duree</IonLabel>
                    <IonSelect interface="popover" onIonChange={(e:any)=>setduree(e.detail.value)}>
                        { 
                            data2.map(lc=>{
                                return(
                                <IonSelectOption key={lc.idduree} value={lc.idduree}>{lc.valeur}</IonSelectOption>
                                )
                    })
                       }   
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position='stacked'>Produits</IonLabel>
                    <IonInput required name='produit' onIonChange={(e:any)=>setproduit(e.target.value)}></IonInput>

                </IonItem>  
                <IonItem>
                    <IonLabel position='stacked'>Description</IonLabel>
                    <IonInput required name='desc' onIonChange={(e:any)=>setdesc(e.target.value)}></IonInput>

                </IonItem>       
                <IonItem>
                    <IonLabel position='stacked'>Prix de depart</IonLabel>
                    <IonInput required name='prix' onIonChange={(e:any)=>setprix(e.target.value)} type="number"></IonInput>

                </IonItem>   
                <IonItem >
                        <IonLabel position="stacked">Photo</IonLabel>
                        <IonInput> <input type="file" accept="image/*" multiple onChange={handleFileInput} /> </IonInput>
                </IonItem>       
                
                    <IonButton disabled={false} expand="block" onClick={valider}>Valider</IonButton>
                
            </IonList>
            </form>
        </div>
);

                    };

export default AjoutE;