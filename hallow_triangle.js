/*

1
1 2
1   3
1     4
1 2 3 4 5
*/
import{ createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
    
        for(let j=1;j<=i;j++)
        {
            if(j===1 || j===i || i=== n)
            {
                row += j+' ';
            }
            else{
                row += '  ';
            }
        }
    
        console.log(row);
    }
    rl.close();
});