 
 /* 1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/
import {createInterface} from 'readline';
const rl = createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Enter how many rows and columns you want',function(input){
    let [n,m] = input.split(' ').map(Number);
    for(let i=1;i<=n;i++)
    {
        let row ='';
        for(let j=1;j<=m-i+1;j++)
        {
            row += j+" ";
        }
        console.log(row);
    }
    rl.close();
});