import {useState} from "react";

import './App.css';
import {getPosts} from "./services/userService";
import ChosenUser from "./components/chosenUser/chosenUser";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users"

function App() {

    let [chosenUser, setChosenUser] = useState(null);
    let [posts, setPosts] = useState([]);

    const chooseUser = (item) => {
        setChosenUser(item);
        setPosts(null);
    }

    const choosePosts = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    }

    return (
        <>
            <div className={'top-content'}>
                <Users chooseUser={chooseUser}/>
                {
                    chosenUser && (<ChosenUser chosenUser={chosenUser} choosePosts={choosePosts} />)
                }
            </div>
            <Posts posts={posts}/>
        </>
    );
}

export default App;
