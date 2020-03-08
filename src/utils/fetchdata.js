/**
 * 接口请求封装
 */
import axios from 'axios';

const fetchData = {
  doGet: (obj) => {
    axios({
      type: 'GET',
      url: '',
      data: obj.data,
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err)
      }
    })
    console.log(obj);
  },
  doPost: (obj) => {

  }
}

export default fetchData;
