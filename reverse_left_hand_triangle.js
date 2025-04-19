/*
15
14 10
13  9 6
12  8 5 3
11  7 4  2  1

*/
import {createInterface} from 'readline';
const rl = createInterface({
    input : process.stdin,
    output:process.stdout,
});

rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);

    let a=15;
    for(let i=1;i<=n;i++)
    {
        let row='';
        let b=a;
        for(let j=1;j<=i;j++)
        {
            row += b +' ';
            b = b-(5-j);

        }
        a=a-1;
        console.log(row);
    }
    rl.close();
});