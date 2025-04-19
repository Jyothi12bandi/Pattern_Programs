/*
1 2 3 4 5
2 3 4 5 6
3 4 5 6 7
4 5 6 7 8
5 6 7 8 9

*/

import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output:process.stdout,
});

rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=0;i<n;i++)
    {
        let row='';
        for(let j=0;j<n;j++)
        {
            row += (i+j+1)+' ';
        }
        
        console.log(row);
    }
    rl.close();
});