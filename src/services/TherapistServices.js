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
    }
    export default TherapistServices;