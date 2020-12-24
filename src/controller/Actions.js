import {OPEN_CELL,MARK_CELL,GAME_LOST,RESTART, MODAL_CANCEL} from './Constants';
export const openCell = (x,y)=>({type:OPEN_CELL,payload:{x,y}});
export const markCell =(x,y)=>({type:MARK_CELL,payload:{x,y}});
export const lost = () =>({type:GAME_LOST});
export const restart =()=>({type:RESTART});
export const modalCancel=()=>({type:MODAL_CANCEL})
