import { useState, useEffect } from "react";

const useFetch = (url) => {


    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        const abortController = new  AbortController()

        setTimeout(() => {
            fetch(url, {signal : abortController.signal })
                .then(res =>{
                    if(!res.ok){
                        throw Error('Could not fetch data from the resource!');
                    }
                    return res.json()
                })
                .then(data =>{
                    setIsloading(false);
                    setData(data);
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Fetch Aborted')
                    }else{
                        setError(err.message);
                        setIsloading(false);
                    }
                    
                })
        }, 1000);

        return() => abortController.abort();
    }, [url]);

     
    return {data, isLoading, error};
}
 
export default useFetch;