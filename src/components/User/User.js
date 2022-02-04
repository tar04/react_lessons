
const User = ({user: {id, name, username, email,address:{street,suite,city,zipcode},phone,website}}) => {

    return (
        <div>
            <div>{id}) {name} ({username}), email: {email}</div>
            <div>Address: {street}, {suite}, {city}, {zipcode}</div>
            <div>Phone: {phone}, website: {website}</div>
            <hr/>
        </div>
    );
};

export {User};