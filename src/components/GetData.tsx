import axios from "axios";
import { useEffect,useState} from "react";
import { urll } from "../url";
function GetData(url: any,method: any,json: any){
    const [data, setData] = useState<Array<any>>([]) 
    const [error, setError] =useState<any>(null)

    useEffect(() => {
        const api = axios.create({
            baseURL: urll
        })
        if(method==="get"){
            api.get(url)
                .then(res => {             
                    setData(res.data)
                    //console.log(res.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="delete"){
            api.delete(url)
                .then(res => {             
                    setData(res.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="post"){
            api.post(url,json)
                .then(res => {             
                    setData(res.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
        if(method==="put"){
            api.put(url,json)
                .then(res => {             
                    setData(res.data)
                 })
                .catch(error=>{
                    setError(error)
                 })
        }
    }, [])
    return {data,error}
}

export default GetData