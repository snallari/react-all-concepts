//Create a provider
//The provider is just like a componnet which passes all props
//except, it has children added inside<A>{children}</A>
//use that stock.usecontext in what ever other component you need

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext=createContext()
//Instead of props drilling
const SampleDataProvider=({children})=>{
    const [post, setPosts]=useState({})
    const[loading, setLoading]=useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log("post",res.data);
            setLoading(false)
            setPosts(res.data);
        })
    }, []);
    console.log("post", post)
    return( <DataContext.Provider value={{'sai':{'post':post, 'loading':loading}}}>
        {children}
    </DataContext.Provider>
    )


}
export const useAPICont=()=>useContext(DataContext)
export default SampleDataProvider