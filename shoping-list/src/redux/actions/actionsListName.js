import { CREATE_LIST_NAME,
         CHANGE_LIST_NAME, 
         REMOVE_LIST_NAME, 
         SELECT_LIST_NAME, 
         SHOW_CREATE_LIST_NAME, 
         HIDE_CREATE_LIST_NAME  } from "../types"

export function selectListName(id){
    return {
        type: SELECT_LIST_NAME,
        payload: id
    }
}

export function changeListName(index, value){
    return {
        type: CHANGE_LIST_NAME,
        index: index,
        value: value
    }
}

export function removeListName(id){
    return {
        type: REMOVE_LIST_NAME,
        payload: id
    }
}

export function createListName(name){
    return {
        type: CREATE_LIST_NAME,
        payload: name
    }
}

export function showCreateListName(){
    return {
        type: SHOW_CREATE_LIST_NAME
    }
}

export function hideCreateListName(){
    return {
        type:  HIDE_CREATE_LIST_NAME
    }
}