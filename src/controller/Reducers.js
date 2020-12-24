import {OPEN_CELL,MARK_CELL, GAME_LOST,RESTART,MODAL_CANCEL} from './Constants';
import {initializeBoard,expandOpenedCell} from '../library/BoardCreate';
const initialBoardState={
    board:initializeBoard(8,8,9),
    opened:Array.from({length:8},()=>Array.from({length:8},()=>false)),
    marked:Array.from({length:8},()=>Array.from({length:8},()=>false)),
    lost:false,
    win:false,
    counter:0
}
export const boardReducer=(state=initialBoardState,action)=>{
    switch(action.type){
        case OPEN_CELL:
            let changedOpen=[...state.opened];
            changedOpen[action.payload.x][action.payload.y]=true;
            if(state.board[action.payload.x][action.payload.y]!=='💣'){
                changedOpen=expandOpenedCell(state.board,state.opened,action.payload.x,action.payload.y)
            }
            return {...state,opened:changedOpen}
        case MARK_CELL:
            const changedMark=[...state.marked];
            let counterUpdate=state.counter;
            let winner=false;
            changedMark[action.payload.x][action.payload.y]=true;
            if(state.board[action.payload.x][action.payload.y]==='💣'){
                counterUpdate+=1;
                if (counterUpdate===9){
                 winner=true;   
                }
            }
            return {...state,marked:changedMark,counter:counterUpdate,win:winner}
        case GAME_LOST:
            const openner=Array.from({length:8},()=>Array.from({length:8},()=>true));
            let boardState=[...state.board];
            for(let x =0;x<8;x++){
                for(let y=0;y<8;y++){
                    if(boardState==='💣'){
                        boardState='💥';
                    }
                }
            }
            const lost=true;
            return {...state,board:boardState,opened:openner,lost:lost,win:false};
        case RESTART:
            const loster=false;
            const board=initializeBoard(8,8,9);
            const opened=Array.from({length:8},()=>Array.from({length:8},()=>false));
            const marked=Array.from({length:8},()=>Array.from({length:8},()=>false));
            return {...state,board:board,opened:opened,marked:marked,lost:loster,win:false,counter:0};
        case MODAL_CANCEL:
            const losterr=false;
            const openeder=Array.from({length:8},()=>Array.from({length:8},()=>false));
            const markeder=Array.from({length:8},()=>Array.from({length:8},()=>false));
            return {...state,opened:openeder,marked:markeder,lost:losterr,win:false,counter:0};

        default:
            return state;
    }
}