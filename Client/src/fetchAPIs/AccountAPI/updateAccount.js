export default function callAPI(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3000/user/${data._id}`;
    fetch(url, {
      headers: { 'Content-type': 'Application/json' },
      method: 'PUT',
      body: JSON.stringify({
        name: data.name,
        tagname: data.tagname,
        password: data.password,
        age: data.age,
        date: data.date,
        avatar: data.avatar,
      }),
    })
      //.then((response) => response.json())
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
