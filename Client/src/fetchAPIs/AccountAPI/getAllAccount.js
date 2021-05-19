export default function callAPI() {
    return new Promise((resolve, reject) =>
    {
        const url = `http://localhost:3000/users`
        fetch(url,{
            method:"GET",
        })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) =>{
            //console.log(res)
            resolve(res);
        })
        .catch((error) =>{
            reject(error);

        });
        
    });
}