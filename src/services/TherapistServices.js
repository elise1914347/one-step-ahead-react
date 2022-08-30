import axios from "axios"


class TherapistServices{
    static  async getAllTherapist(){
    try{
        const response = await axios.get("http://localhost:5050/therapist/getall");
        console.log("response from Therapist:",response)
        return response.data
    
    }catch (e){
        console.log("Error :>>>",e);
    }
    
    }
    static async createTherapist(data) {
        try {
          const response = await axios.post(
            "http://localhost:5050/user/create",
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("response of createAccount:", response.data);
          return response.data;
        } catch (error) {
          console.log("failed !", Error);
        }
      }
    
    }
    


    export default TherapistServices;