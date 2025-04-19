/*
 
*/
import{ createInterface } from 'readline';
const rl = createInterface({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter how many rows you want: ",function(value){
    let n = Number(value);
    for(let i=1;i<=n;i++)
    {
        let row='';
        let count =1;
        for(let k=1;k<=n-i;k++)
        {
            row += '  ';
        }
        for(let j=1;j<=2*i-1;j++)
        {
           
            if(j<i)
            {
               
                row += count++ +' ';
            }
            else{
                row += count-- + ' ';
            }
        }
        console.log(row);
    }
    rl.close();
});