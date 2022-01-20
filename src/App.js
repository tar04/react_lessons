import './App.css';
import Users from "./components/Users/Users";

function App() {
    return (
        <div>
            <div>
                <label>Name: <input type="text"/></label>
                <label>Username: <input type="text"/></label>
                <label>Email: <input type="text"/></label>
                <button>Find</button>
            </div>
            <div>
                <Users/>
            </div>
        </div>
    );
}

export default App;
