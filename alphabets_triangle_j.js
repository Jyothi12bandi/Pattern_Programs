/*
A 
A B
A B C
A B C D
A B C D E

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
            row += String.fromCharCode(64+j)+' ';
        }
        console.log(row);
    }
    rl.close();
});