//Create a function abc=(wrappedcomponent)=>{ return abc(props){along withe functionality shared to the wrapped}}
//return the wrapped compomenent resting and passing other variables {...props} 

import React, { useState, useEffect } from 'react';
import axios from "axios";
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent(props) {
        const [loading, setLoading] = React.useState(false);
        const [posts, setPosts]=useState({})
            useEffect(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
                    console.log("post",res.data);
                    setPosts(res.data);
                    setLoading(false)
                })
            },[]);
 
        // Pass loading state as a prop to the wrapped component
        return <WrappedComponent
            {...props} loading={loading} posts={posts} />;
    };
};


const MyComponent = ({ loading, posts}) => {
    console.log(loading, posts)
    return <div>
        {loading ?
        <p>Loading...</p>
        :<div>
            <MyComponentA posts={posts}/>
            <MyComponentB posts={posts}/>
          </div>  }   
    </div>
};

const MyComponentA = (props) => {
    const {posts}=props
    return <div>
         <div>{posts.map((p)=>{return <div id={p.id}>{p.title}</div>})}</div>
    </div>
};
const MyComponentB = ({ loading, posts}) => {
    console.log(loading, posts)
    return <div>
        <div>{posts.map((p)=>{return <strong id={p.id}>{p.title}</strong>})}</div>
    </div>
};

const EnhancedComponent = withLoading(MyComponent);

function HOC() {
    return (
        <>
            {/* Render the enhanced component */}
            <EnhancedComponent />
        </>
    );
}

export default HOC