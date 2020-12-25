import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
// import Draggable from 'react-draggable';
import CellContainer from './CellContainer';
import {Modal,Progress} from 'antd';
import './Board.css';
import {restart,modalCancel} from '../controller/Actions';

const Board = () => {
    const width=8;
    const height=8;
    const dispatch = useDispatch();
    const [disabled,setdisabled]=React.useState(true);
    const showModal=useSelector(state =>state.lost);
    const counterMarked=useSelector(state=>state.win);
    const countNow=useSelector(state =>state.counter);
    const [confirmLoading,setConfirmLoading]=React.useState(false);
    const [modalText,setModalText]=React.useState('Failure is a detour, not a dead-end street. Try Again!!');
    const [modalSuccessText,setModalSuccessText]=React.useState('Winner Winner Chicken Dinner!');
    const handleOk = () => {
        setModalText('Restarting Game Now.....');
        setConfirmLoading(true);
        setTimeout(() => {
            dispatch(restart());
          setConfirmLoading(false);
          setModalText('Failure is a detour, not a dead-end street. Try Again!!');
          setModalSuccessText('Winner Winner Chicken Dinner!');
        }, 800);
      };
    const handleCancel = () => {
        setModalText('Reseting Game Now.....');
        setConfirmLoading(true);
        setTimeout(() => {
            dispatch(modalCancel());
          setConfirmLoading(false);
          setModalText('Failure is a detour, not a dead-end street. Try Again!!');
          setModalSuccessText('Winner Winner Chicken Dinner!');
        }, 200);
      };
    
    return (
        <>
        <Modal
        title="GAME LOST"
        visible={showModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        onMouseOver={() => {
            if (disabled) {
              setdisabled(false);
            }
          }}
        onMouseOut={() => {
            setdisabled(true);
        }}
        // modalRender={modal=><Draggable disabled={true}>{modal}</Draggable>}
        >
        <p>{modalText}</p>
        </Modal>
        <Modal
        title="GAME WON"
        visible={counterMarked}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        onMouseOver={() => {
            if (disabled) {
              setdisabled(false);
            }
          }}
        onMouseOut={() => {
            setdisabled(true);
        }}
        // modalRender={modal=><Draggable disabled={false}>{modal}</Draggable>}
        >
        <p>{modalSuccessText}</p>
        </Modal>
        <p className="FlagMine">Flagged Mines - <strong className="Bomb">{countNow}</strong><strong className="DivideBomb">|</strong><strong className="BombCount">9</strong></p>
        <Progress
            status="active"
            percent={countNow*12}
            steps={9}
            showInfo={false}
            style={{}}
        />
         <br/>
        <div className="Wrapper">
            
            {Array(width*height).fill().map((x,y)=>
            <CellContainer key={y} x={y%width} y={Math.floor(y/width)}/>)}
        </div>
        </>
    )
}

export default Board
