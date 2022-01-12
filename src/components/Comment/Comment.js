const Comment = (props) => {
    const {id, name, email, body} = props;

    return (
        <div>
            Id:{id}, name:{name}, email:{email}, body:{body}
        </div>
    );
};

export default Comment;