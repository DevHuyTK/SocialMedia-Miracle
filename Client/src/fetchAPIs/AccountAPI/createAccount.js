export default function callAPI(data) {
    return new Promise((resolve, reject) =>
    {
        const url = `http://localhost:3000/user/register`
        fetch(url,{
            headers:{"Content-type":"Application/json"},
            method:"POST",
            body:JSON.stringify({
                name: data.name,
                tagname: data.tagname,
                email: data.email,
                password: data.password,
                age: data.age,
                avatar: data.avatar
            })
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