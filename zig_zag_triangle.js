/*
15
14 13
12 11 10
9  8  7  6
5  4  3  2  1
*/

import { createInterface} from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want: ", function(value){
    let n = Number(value);

    let a = 15;
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += a+' ';
            a--;
        }
        console.log(row);
    }
    rl.close();
});