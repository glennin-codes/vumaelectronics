import axios from 'axios'
const Payment= ()=>{

        var url = " https://tinypesa.com/api/v1/express/initialize";
       fetch(url, {
          body: `amount=1&msisdn=0713322025&account_no=545700`,
          headers: {
              Apikey: "Dc8P9PZRAZZ",
              "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
      })
        

      }
  Payment();
  
  

  const getPayment = async () => {
    const url = "https://tinypesa.com/api/v1/express/initialize";
    const body = "amount=1&msisdn=0713322025";
  
    try {

      const response= await   axios({
          method: "post",
          url: url,
          body: "amount=1&msisdn=0713322025&account_no=545700",
          headers: {
            Apikey: "Dc8P9PZRAZZ",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  
 getPayment();
  
 
