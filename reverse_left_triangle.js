/*
                1
             1  2
         1   2  3
      1  2   3  4
   1  2  3   4  5

*/

import { createInterface } from 'readline';
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("ENter how many rows and columns you want: ",function(input){
    const [n,m] = input.split(' ').map(Number);

    for(let i=n;i>0;i--)
    {
        let row='';
        for(let k=1;k<=2*(n-i+1);k++)
        {
            row += ' ';
        }
        for(let j=1;j<=i;j++)
        {
            row += j+' ';
        }
        console.log(row);
    }
    rl.close();
});