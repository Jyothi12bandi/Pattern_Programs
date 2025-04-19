/*
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15

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
        for(let j=1;j<=i;j++)
        {
            row += a +' ';
            a++;
        }
        console.log(row);
    }
    rl.close();
});