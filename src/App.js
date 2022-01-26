import {Link, Routes, Route} from 'react-router-dom';

import './App.css';
import UsersPage from "./pages/usersPage/usersPage";
import PostsPage from "./pages/postsPage/postsPage";
import UserDetails from "./pages/userDetails/userDetails";
import PostsOfUser from "./pages/postsOfUser/postsOfUser";

function App() {
    return (
        <>
            <div className={'menu'}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
            <div className={'container'}>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<PostsOfUser/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
