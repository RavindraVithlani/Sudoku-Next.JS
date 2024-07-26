
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
    const group1Elements = document.querySelectorAll(`[data-group="${group}"]`);

    group1Elements.forEach(element => {
        // Skip the target element itself
        if (element !== targetElement && element.value === value) {
          return false
        }
      });
    return true;
    
}



