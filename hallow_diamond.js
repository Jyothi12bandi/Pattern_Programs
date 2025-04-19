/*
        *
      *   *
    *       *
  *           *
    *       *
      *   *
        *
*/

import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});
rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);

    for(let i=1;i<n;i++)
    {
        let row='';
        for(let k=1;k<=n-i;k++)
        {
            row += ' ';
        }
        for(let j=1;j<=i;j++)
        {
            if(j===1||j===i || i===n)
            {
                row += '*'+' ';
            }
            else{
                row += '  ';
            }
        }
        console.log(row);
    }
    for(let i=n-1;i>0;i--)
    {
        let row='';
        for(let k=1;k<=n-i;k++)
        {
            row += ' ';
        }
        for(let j=1;j<=i;j++)
        {
            if(j===1||j===i || i===n)
            {
                row += '*'+' ';
            }
            else{
                row += '  ';
            }
        }
        console.log(row);
    }
    rl.close();
});