import axios from "axios";
export const getAllTickets = async() => {

return new Promise(async(resolve,reject)=>{

    try {
        const result = await axios.get("http://localhost:3001/v1/ticket", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNzZkBnZC5jb20iLCJpYXQiOjE2MzY0MDQxNzMsImV4cCI6MTYzNjQwNTM3M30.86CwAURb-frKBo_K7t-ckF_cnvPT_oU6PXNjn1hsKL4",
          },
        });
        resolve(result)
      } catch (error) {
          reject(error)
      }
})

};
