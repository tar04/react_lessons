const Post = (props) => {
    const {id,title,body}=props;

    return (
        <div>
            Id: {id}, title:{title}, body:{body}
        </div>
    );
};

export default Post;