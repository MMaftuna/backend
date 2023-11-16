import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const url = 'https://jsonplaceholder.typicode.com/posts';


const AppProvider = ({children}) => {

    const [count, setCount] = useState(100);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json(); 
            setPosts(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts()
    },[])

    return (
        <AppContext.Provider value={{count, posts}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };



