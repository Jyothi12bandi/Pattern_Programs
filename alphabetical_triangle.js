/*
A
B C
D E F
G H I J
K L M N O

*/
import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Enter how many rows you want : ",function(value){
    let n = Number(value);

    let a=1;
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += String.fromCharCode(64+a) +' ';
            a++;
        }
        console.log(row);
    }
    rl.close();
});