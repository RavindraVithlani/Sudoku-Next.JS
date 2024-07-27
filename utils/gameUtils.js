
export const checkColumn =(row, col, value,grid)=>{
    for (let i=0;i<9;i++){
        if (i != row && grid[i][col].value==value){
            return false;
        }
    }
    return true;
}

export const checkRow =(row, col, value,grid)=>{
    for(let i = 0;i<9;i++){
        if (i!= col && grid[row][i].value == value){
            return false;
        }
    }
    return true
}

export const checkGroup =(group,value,targetElement)=>{
    const groupElements = document.querySelectorAll(`[data-group="${group}"]`);
    for(let i =0;i<groupElements.length;i++){
        console.log(i," element value ", groupElements[i].value);   
        if (groupElements[i].value == value && groupElements[i]!=targetElement){
            return false;
        }
    }
    return true;
    
}



