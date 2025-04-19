/*
1
2  2
3     3
4        4
5  5  5  5  5
*/

import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            if(j===1 || j=== i || i=== n)
            {
                row += i+' ';
            }
            else{
                row += '  ';
            }
        }
        console.log(row);
    }
    rl.close();
});