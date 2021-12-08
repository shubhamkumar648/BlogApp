import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw Error(" error:could not show the data for that resources");
              }
    
              // console.log(response);
              return response.json();            
            })
    
            .then((data) => {
              setData(data);
              setisPending(false);
              setError(null);
            })
            // .catch((err)=> console.log(err))
            .catch((err) => {
              setError(err.message);
              setisPending(false);
            });
        }, 1000);
      }, [url]);
    

    return (

        {data, isPending,error}
      );
}
 
export default useFetch;