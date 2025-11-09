const  twoSum=(arr,target)=>{

    const numMap=new Map()

    for (let i = 0; i < arr.length; i++) {
const curentNumber=arr[i]
const complemet=target-curentNumber;

if(numMap.has(complemet)){
    return [numMap.get(complemet),i]
}

numMap.set(curentNumber,i)

        
    }
return undefined
}

console.log(twoSum([2,11,7,9],9)); 