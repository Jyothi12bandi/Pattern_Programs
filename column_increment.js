/*
1 6 11 16 21
2 7 12 17 22
3 8 13 18 23
4 9 14 19 24
5 10 15 20 25
*/

import { createInterface } from 'readline';
const rl = createInterface({
    input:process.stdin,
    output : process.stdout,
});
rl.question("Enter a number: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        let a=i;
        for(let j=1;j<=n;j++)
        {
            row += a+' ';
            a=a+5;
        }
        console.log(row);

    }
    rl.close();
});