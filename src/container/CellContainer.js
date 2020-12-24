import React,{useCallback} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Cell from '../components/Cell';
import {openCell,markCell,lost} from '../controller/Actions';
const CellContainer = ({x,y}) => {
    const dispatch = useDispatch();
    const cellOpenState = useSelector(state => state.opened[x][y])
    const cellContent=useSelector(state=>state.board[x][y])
    const cellMarkState=useSelector(state=>state.marked[x][y])
    const leftClick =useCallback(
        () => {
            if(!cellOpenState){
            dispatch(openCell(x, y))};
        },
        [cellOpenState,x,y,dispatch],
    );
    const onRightClickCell = useCallback((e)=>{
        e.preventDefault();
        if(!cellMarkState){
        dispatch(markCell(x, y))};
    },[cellMarkState,x,y,dispatch]);
    const getCellContent=useCallback(content=>{
        if(cellOpenState){
            if(content==='💣'){
                dispatch(lost());
                return '💥';
            }
            return content;
        }else{
            if(cellMarkState){
                return '🚩';
            }else{
                return ' ';
            }
        }
    },[cellMarkState,cellOpenState,dispatch]);
    return (
        <>
        <Cell onLeftClickCell={leftClick} onRightClickCell={onRightClickCell} open={cellOpenState} content={getCellContent(cellContent)}/>
        </>
    )
}

export default CellContainer;
