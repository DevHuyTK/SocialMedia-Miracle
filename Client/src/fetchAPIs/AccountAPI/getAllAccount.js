export default function callAPI(data) {
  return new Promise((resolve, reject) => {
    const url = `http://192.168.0.102:3000/users`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        //console.log(res)
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
