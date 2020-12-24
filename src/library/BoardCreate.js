export const initializeBoard=(width,height,mineCount)=>{
    const aux=Array(width*height).fill().map((_,x)=>x);
    const shuffle=[];
    const boardData=[];
    while (aux.length>width*height-mineCount){
        const chosen=aux.splice(Math.floor(Math.random() * aux.length),1)[0];
        shuffle.push(chosen);
    }
    for(let i=0;i<height;i++){
        const row=Array(width).fill(' ');
        boardData.push(row);
    }
    for(let i=0;i<shuffle.length;i++){
        const x=shuffle[i]%width;
        const y=Math.floor(shuffle[i]/width);
        boardData[x][y]='💣';
    }
    const counter=(x,y)=>{
        if (x<0 | y<0 | x>=height |y>=width){
            return 0;
        }
        if (boardData[x][y]==='💣'){
            return 1;
        }
        return 0;
    }
    for(let x=0;x<height;x++){
        for (let y=0;y<width;y++){
            if (boardData[x][y]===' '){
            let temp=0;
            temp+=counter(x-1,y-1);
            temp+=counter(x-1,y);
            temp+=counter(x-1,y+1);
            temp+=counter(x,y-1);
            temp+=counter(x,y+1);
            temp+=counter(x+1,y-1);
            temp+=counter(x+1,y);
            temp+=counter(x+1,y+1);
            if(temp!==0){
                boardData[x][y]=temp.toString();
            }}
        }
    }
    return boardData;
}
export const expandOpenedCell = (board,opened, x, y) => {

	const dfsSearch = (x, y,level=0) => {
        if (level>3){
            return;
        }
        x=parseInt(x)
        y=parseInt(y)
        if(x<0 | y<0 | x>7 | y>7){
            return;
        }
		if (board[x][y] === '💣') {
			return;
		}
		let aroundPoint = [];
		aroundPoint = aroundPoint.concat({ x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 });
		aroundPoint = aroundPoint.concat({ x: x - 1, y }, { x: x + 1, y });
		aroundPoint = aroundPoint.concat({ x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 });

		if (board[x][y] === ' ' | board[x][y]==='1' |board[x][y]==='2') {
			aroundPoint.forEach((v) => {
				dfsSearch(v.x, v.y,level+1);
			});
        }
        opened[x][y]=true;
	};

	dfsSearch(parseInt(x), parseInt(y));
	return opened;
};