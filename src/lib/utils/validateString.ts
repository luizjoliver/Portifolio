export const validateString = (value:unknown, limit:number) =>{
    if(!value || typeof value !== "string" || value.length > limit){

        return false
    }

    return true
 }
