/*
A 
B B
C C C
D D D D
E E E E E

*/
import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Enter how many rows you want : ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += String.fromCharCode(64+i)+' ';
        }
        console.log(row);
    }
    rl.close();
});