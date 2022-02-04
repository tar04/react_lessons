

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <h2>{id}) {name} ({email}) writes</h2>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Comment};