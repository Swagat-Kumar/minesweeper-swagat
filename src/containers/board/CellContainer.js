import React from 'react'


const CellContainer = ({x,y}) => {
    const dispatch=useDispatch();
    const gameState = useSelector(rootState => rootState.control.gameState)
    const cellId=useSelector(rootState=>rootState.control.board[x][y]);
    return (
        <div>
            
        </div>
    )
}

export default CellContainer
