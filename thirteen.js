/*
         *
       * A *
     * A * A *

*/
import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Enter how many row you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let k=1;k<=n-i;k++)
        {
            row += '  ';
        }
        for(let j=1;j<=2*i-1;j++)
        {
            if(j%2===0)
            {
                row += 'A'+' ';
            }
            else{
                row += '*'+' ';
            }
        }
        console.log(row);
    }
    rl.close();
});