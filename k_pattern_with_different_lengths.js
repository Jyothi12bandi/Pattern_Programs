/*
    1 2 3 4 5 6 7 8
    1 2 3 4 5 6
    1 2 3 4
    1 2
    1
    1 2 
    1 2 3 
    1 2 3 4
    1 2 3 4 5

*/
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
  output: process.stdout,
});
rl.question("Enter how many rows and columns you want : ",function(input){
    const [n,m] = input.split(' ').map(Number);

    for(let i=n;i>0;i-=2)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += j+' ';
        }
        console.log(row);
    }

    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += j+' ';
        }
        console.log(row);
    }

    rl.close();
});