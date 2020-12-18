import React, {memo} from 'react';
import Button from 'antd';
const Cell = ({cellId,cellText,onLeftClick,onRightClick}) => {
    return (
        <Button cellId={cellId} onClick={onLeftClick} onContextMenu={onRightClick}>{cellText}</Button>
    )
}

export default memo(Cell);
