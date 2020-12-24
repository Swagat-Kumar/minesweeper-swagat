import React from 'react';
import {Button} from 'antd';
const Cell = ({open,content,onLeftClickCell,onRightClickCell}) => {
    return (
        <Button style={{width:'40px',height:'35px',margin:'2px',color:'black',fontSize:'17px'}} size='small' onClick={onLeftClickCell} onContextMenu={onRightClickCell} type='primary' disabled={open}>{content}</Button>
    )
}

export default Cell
