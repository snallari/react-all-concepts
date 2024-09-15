import { useState,useEffect } from "react";
import axios from "axios";

function Apis(){
    const [post, setPosts]=useState({})
    const [loading ,setLoading]=useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log("post",res.data);
            setPosts(res.data);
            setLoading(false)
        })
    },[]);
    return <div>{loading?<div>loading</div>:<div>{post.map((p)=><ul id={p.id}><li>{p.title
    }</li></ul>)}</div>}</div>
}
export default Apis