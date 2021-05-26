import {Alert} from 'react-native';

export default function callAPI(data) {
    console.log(JSON.stringify(data), "data: ")
    return new Promise((resolve, reject) =>
    {
        const url = `http://192.168.1.111:3000/user/login`
        fetch(url,{
            headers:{"Content-type":"Application/json"},
            method:"POST",
            body:JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) =>{
            // console.log(res)
            resolve(res);
        })
        .catch((error) =>{
            reject(error);
            return Alert.alert('Email hoặc mật khẩu không đúng');
        });
        
    });
}