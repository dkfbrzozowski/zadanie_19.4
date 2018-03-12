import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// ADD COMMENT

const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
};

const boundAddComment = text => dispatch(addComment(text));

// EDIT COMMENT

const editComment = text => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));


// REMOVE COMMENT

const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
};

const boundRemoveComment = id => dispatch(removeComment(id));

// THUMB UP COMMENT

const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id,
        likes: ++likes
    }
};

const boundThumbUpComment = (id, likes) => dispatch(thumbUpComment(id, likes));

// THUMB DOWN COMMENT

const thumbDownComment = (id, dislikes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        dislikes: ++dislikes
    }
}

const boundThumbDownComment = (id, likes) => dispatch(thumbDownComment(id, dislikes));