import './App.css';
import Users from "./components/Users/Users";
import {useState} from "react";
import {getUsers} from "./services/UserServices/UserServices";

function App() {

    let [form, setForm] = useState({name: '', username: '', email: ''});
    let [searchName, setSearchName] = useState([]);

    const send = (e) => {
        e.preventDefault();
        getUsers().then((value) => {
            setSearchName(value.data.filter(item => {
                item.name.includes(form.name)
            }))
        })
    }

    const show = () => {
        console.log(searchName);
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
                <button onClick={show}>show</button>
            </div>
            <div>
                <Users searchName={form.name} searchUsername={form.username} searchEmail={form.email}/>
            </div>
        </div>
    );
}

export default App;
