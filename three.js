/* 
1 1 1 1 1 
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5
*/

import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output: process.stdout,
});
rl.question("Enter how many rows you want : ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=n;j++)
        {
            row += i+' ';
        }
        console.log(row);
    }
    rl.close();
})