const User = (props) => {
    const {id, name, username, email} = props;

    return (
        <div>
            Id: {id}, name: {name}, username: {username}, email: {email}
        </div>
    );
};

export default User;