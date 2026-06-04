export default defineEventHandler(async(event) =>{

    // handel query params
    //const {name} = getQuery(event)

    //handel post data
    //const {age} = await readBody(event)

    // api call wirh private key
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_wzhb1NjW7iRIrTNP9tR5kNRf5tKebGwxSWLKEzKf')
    return data
})