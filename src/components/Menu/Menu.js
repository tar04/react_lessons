import {Link, Route, Routes} from "react-router-dom";

import {CarsPage, CommentsPage, PostsPage, UsersPage} from "../../pages";
import "./Menu.css";


const Menu = () => {
    return (
        <>
            <div className={'menu'}>
                <Link className={'btn'} to={'/users'}>Users</Link>
                <Link className={'btn'} to={'/posts'}>Posts</Link>
                <Link className={'btn'} to={'/comments'}>Comments</Link>
                <Link className={'btn'} to={'/cars'}>Cars</Link>
            </div>
            <div className={'content'}>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Routes>
            </div>
        </>
    );
};

export {Menu};