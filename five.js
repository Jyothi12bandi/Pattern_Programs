/*
01 02 03 04 05
06 07 08 09 10
11 12 13 14 15 
16 17 18 19 20
21 22 23 24 25
*/

import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want : ",function(value){
    let n = Number(value);
    let a=1;
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=n;j++)
        {
            if(a<10)
            {
                row += '0';
            }
            
            row += a+' ';
            a++;
        }
        console.log(row);
    }
    rl.close();
});