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
// EDIT COMMENT
const editComment = text => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
};
// REMOVE COMMENT
const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
};
// THUMB UP COMMENT
const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
};
// THUMB DOWN COMMENT
const thumbDownComment = (id, likes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}