const getdata = async () =>{
    const result = await fetch ("https://randomuser.me/api/");
    const data = await response.result.json;
    console.log(data);
    
}