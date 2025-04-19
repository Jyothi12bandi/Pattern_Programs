/*
1 1 1 1 1
1       1
1       1
1       1
1 1 1 1 1
*/

import{createInterface} from 'readline';
const rl = createInterface({
    input :process.stdin,
    output : process.stdout,
});

rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=n;j++)
        {
            if(i===1 || i===n || j===1 || j===n)
            {
                row += '1'+' ';
            }
            else{
                row += '  ';
            }
            
        }
        console.log(row);
    }
    rl.close();
});