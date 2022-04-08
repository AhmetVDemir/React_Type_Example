import React, { useEffect, useState } from 'react';
import axios from "axios";
import { UlkeTipi } from './Types';
import Ulke from './Components/Ulke';
import Loading from './Components/Loading';

function App() {


    const [contry,setContry] = useState<UlkeTipi[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const getUlke = async () =>{

        setLoading(true);

        try{
            const { data }  = await axios.get<UlkeTipi[]>("https://restcountries.com/v2/all");
            setContry(data);
        }catch{
            console.log("Veri çekerken hata oluştu");
        }finally{
            setLoading(false);
        }
        
    }


    useEffect(()=>{
        getUlke();

    },[]);

    console.log(contry);

    return (
        <div>
            <h1>Type Script uygulaması ile ülkeler</h1><br/>

            <Loading loading={loading}>

            {contry.map((contry) => {
                return(
                    <Ulke key={contry.name} contry={contry} />
                );
            })}


            </Loading>

          
            
        </div>
    );
}

export default App;