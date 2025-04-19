/*
A
B F
C G J
D H K M
E I L N O
*/

import{ createInterface } from 'readline';
const rl = createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        let a=i;
        for(let j=1;j<=i;j++)
        {
            row += String.fromCharCode(64+a)+' ';
            a += 5-j;
        }
        console.log(row);
    }
    rl.close();
});