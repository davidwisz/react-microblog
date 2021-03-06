import React from 'react';
import CommentsForm from './CommentsForm';
import { useDispatch } from 'react-redux';
import {delete_comment} from './actions';


function CommentsContainer({ post }){

  const { comments, id } = post;
  const dispatch = useDispatch();

  const handleDelete = ( commentId ) => {
    let payload = {id, commentId};
    dispatch(delete_comment(payload));
  }


  console.log("comment container",comments);
  return(
    <div className="CommentsContainer">
      <h3>Comments</h3>
      <div>
        {comments.length ? 
          comments.map(comment =>
            <p key={comment.id}>
                <button onClick={() =>handleDelete(comment.commentId)}>X</button>{comment.text}
            </p>) : null }
        <h4>Add a Comment</h4>
      </div>
      <CommentsForm postId={id} />
    </div>
  )
}

export default CommentsContainer;