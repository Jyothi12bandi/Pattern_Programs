/*
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
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
            row += a+' ';
            a += 5-j;
        }
        console.log(row);
    }
    rl.close();
});