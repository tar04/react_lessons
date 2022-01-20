import './App.css';
import Users from "./components/Users/Users";
import {useState, useEffect} from "react";
import {getUsers} from "./services/UserServices/UserServices";

function App() {

    let [form, setForm] = useState({name: '', username: '', email: ''});
    let [searchName, setSearchName] = useState([]);


    const send = (e) => {
        e.preventDefault()
        getUsers().then(value => setSearchName(value.data.filter(item => item.name.includes(form.name))))
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div>
                <form onSubmit={send}>
                    <label>Name: <input type="text" name={'name'} value={form.name} onChange={onChange}/></label>
                    <label>Username: <input type="text" name={'username'} value={form.username}
                                            onChange={onChange}/></label>
                    <label>Email: <input type="text" name={'email'} value={form.email} onChange={onChange}/></label>
                    <button>Find</button>
                </form>
            </div>
            <div>
                <Users searchName={searchName}/>
            </div>
        </div>
    );
}

export default App;
