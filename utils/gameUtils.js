
export const checkColumn =(row, col, value,grid)=>{
    for (let i=0;i<9;i++){
        if (i != row && grid[i][col].value==value){
            console.log(false,"col");
            return false;
        }
    }
    console.log(row,col,value, "column");
    return true;
}

export const checkRow =(row, col, value,grid)=>{
    for(let i = 0;i<9;i++){
        if (i!= col && grid[row][i].value == value){
            console.log(false, "row"); 
            return false;
        }
    }
    console.log(row,col,value,"row");
    return true
}

export const checkGroup =(group,value,targetElement)=>{
    const group1Elements = document.querySelectorAll(`[data-group="${group}"]`);

    // Iterate over the selected elements
    group1Elements.forEach(element => {
        // Skip the target element itself
        if (element !== targetElement && element.value === value) {
          return false
        }
      });
    return true;
    
}



