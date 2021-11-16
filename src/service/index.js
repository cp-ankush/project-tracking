const getApiData = ({method, url, data}) => {
    let extraPayload = {}
    if (method === 'POST') {
        extraPayload = {}
    }
    return fetch(url, {
        method, 
        headers: {
          'Content-Type': 'application/json'
        },
        ...extraPayload 
      }).then((res) => {
        return res.json();
      }).then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
}

export default getApiData;