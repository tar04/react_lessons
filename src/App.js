import './App.css';
import {useEffect, useState} from "react";


import {getUser, getUsers, getPosts} from "./services/userService";
import UserComponent from "./components/userComponent/userComponent";
import ChosenUser from "./components/chosenUser/chosenUser";
import ChosenPosts from "./components/chosenPosts/chosenPosts";

function App() {

    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);
    let [chosenPosts, setChosenPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data))
    }

    const choosePosts = (id) => {
        getPosts(id).then(value => setChosenPosts(value.data))
    }

    return (
        <>
            <div className={'top-content'}>
                <div className={'users'}>
                    {
                        users.map(value =>
                            <UserComponent
                                key={value.id}
                                item={value}
                                chooseUser={chooseUser}
                            />)
                    }
                </div>
                {
                    chosenUser && (<ChosenUser chosenUser={chosenUser} choosePosts={choosePosts}/>)
                }
            </div>
            <div className={'bottom-content'}>
                {
                    chosenPosts.map((post) =>
                        <ChosenPosts
                            key={post.id}
                            post={post}
                        />)
                }
            </div>
        </>
    );
}

export default App;
