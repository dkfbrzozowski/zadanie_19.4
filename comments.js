import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

export const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
        case EDIT_COMMENT:
            const check = state.comments.find(comment => (comment.id === action.id));
            if (check) {
                const index = state.comments.indexOf(check);
                return [
                   ...state.comments.slice(0, index),
                   {...state.comments[index], text: action.text},
                   ...state.comments.slice(index+1, state.comments.length)
                ];
            } else {
                return state;
            }
            break;

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...state, votes: comment.votes + 1 };
                }
                
                return comment;
            });                     
        case THUMB_DOWN_COMMENT:
            const check = state.comments.find(comment => (comment.id === action.id));
            if (check) {
                const index = state.comments.indexOf(check);
                return [
                   ...state.comments.slice(0, index),
                   {...state.comments[index], votesDown: state.comments[index].votesDown + 1},
                   ...state.comments.slice(index+1, state.comments.length)
                ];
            } else {
                return state;
            }
            break;

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
            break;

        default:
            return state;
    }
    
}
