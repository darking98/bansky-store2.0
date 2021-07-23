export const getCategory = async () =>{
    const request = fetch(`http://localhost:4000/products`);
    const response = await (await request).text();
    return JSON.parse(response)
}