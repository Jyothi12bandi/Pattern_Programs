/*
1        5
  2    4
    3
  2    4
1        5
*/
import{createInterface } from 'readline';
const rl = createInterface({
    input : process.stdin,
    output: process.stdout,
});
rl.question("Enter how many rows you want :",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        for(let j=1;j<=n;j++)
        {
            if(j==i || (j+i)===6)
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