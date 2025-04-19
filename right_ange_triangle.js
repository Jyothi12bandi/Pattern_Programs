/*  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
import { createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter number of rows you want :",function(value){
    let n = Number(value);
    
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=i;j++)
        {
            row += j+" ";
        }
        console.log(row);
    }

    rl.close();
});
