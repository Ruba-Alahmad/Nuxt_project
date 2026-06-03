export default defineEventHandler(async(event) =>{

    // handel query params
    const {name} = getQuery(event)

    //handel post data
    const {age} = await readBody(event)
    return{
        message: `Hello, ${name}! you are ${age} years old`
    }
})