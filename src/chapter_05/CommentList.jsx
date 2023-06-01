import React from "react";
import Comment from './Comment';

const comments = [
    {
        name: "Person1",
        comment: "Comment 1",
    },
    {
        name: "Person2",
        comment: "Comment 2",
    },
    {
        name: "Person3",
        comment: "Comment 3 ",
    }
];

function CommentList(props) {
    return (
        <div>
            <Comment name={"김윤재"} comment={"First Comment !"} />
            <Comment name={"유재석"} comment={"Second Comment !"} />
            
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}

export default CommentList;