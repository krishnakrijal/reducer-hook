import React,{useState,useEffect} from 'react';
import Axios from 'axios';


function DataFetching() {
    const [loading,setLoading]= useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(()=>{
     Axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response =>{
         setLoading(false)
         setPost(response.data)
         setError('')
     })
     .catch(error => {
         setLoading(false)
         setPost({})
         setError('there is something wrong')
     })
    },[])
    return (
        <div>
            { loading ?'loading': post.title }
            { error ? error : null }
            
        </div>
    );
}

export default DataFetching;