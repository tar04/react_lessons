import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="wrap">
            <div className="top">
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
