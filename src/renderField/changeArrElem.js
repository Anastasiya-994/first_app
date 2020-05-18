export const changeArrElem = (iteam, elemId, propsId, change)=>{
    return iteam.map((u)=>{
        if(u[elemId] === propsId){
            return {...u, ...change}
        }
       return u;
    })
}