/*
       1
     2 1 2
   3 2 1 2 3

*/

import { createInterface} from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let k=1;k<=2*(n-i);k++)
        {
            row += ' ';
        }
        for(let j=i;j>0;j--)
        {
           row += j+' ';
        }
        if(i===2 || i===3|| i===4 || i===n)
        {
            for(let j=2;j<=i;j++)
            {
                row += j +' ';
            }
        }
        
        console.log(row);
    }
    rl.close();
});