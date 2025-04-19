/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);

    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += j+' ';
        }
        console.log(row);
    }
    for(let i=n-1;i>0;i--)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += j+' ';
        }
        console.log(row);
    }

    rl.close();
})