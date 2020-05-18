export const required = (value)=>{
    if(value) return undefined;
    return 'You must fill all fields';
}


export const Maxlength = (maxlength)=>(value)=>{
    return (value && value.length > maxlength? `MaxLength ${maxlength}` : undefined)
}