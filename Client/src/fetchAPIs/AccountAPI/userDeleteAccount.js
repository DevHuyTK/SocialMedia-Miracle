export default function callAPI(data) {
    return new Promise((resolve, reject) =>
    {
        const url = `http://localhost:3000/user/delete/${data._id}`
        fetch(url,{
            method:"PUT"
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