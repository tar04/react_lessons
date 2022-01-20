import './App.css';
import {useState, useEffect} from "react";

import Users from "./components/Users/Users";
import {getUsers} from "./services/UserServices/UserServices";

function App() {

    let [form, setForm] = useState({name: '', username: '', email: ''});
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])


    const send = (e) => {
        e.preventDefault()
        getUsers().then(value => setUsers(value.data.filter(item => item.name.includes(form.name) && item.username.includes(form.username) && item.email.includes(form.email))))
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div>
                <form onSubmit={send}>
                    <label>Name: <input type="text" name={'name'} value={form.name} onChange={onChange}/></label>
                    <label>Username: <input type="text" name={'username'} value={form.username} onChange={onChange}/></label>
                    <label>Email: <input type="text" name={'email'} value={form.email} onChange={onChange}/></label>
                    <button>Find</button>
                </form>
            </div>
            <div>
                <Users users={users}/>
            </div>
        </div>
    );
}

export default App;
