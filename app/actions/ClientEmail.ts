"use server";

import { RequestDataType } from "@/components/pages/home/MainPage";
import { createRequest } from "@/views/clientRequestView";


export async function createRequestEmail(
    prevState: null,
    formData: FormData,
  ){
      
    const data: RequestDataType = {
      
      email: formData.get("email")?.toString() || "",
      
    }
    console.log(data);
    try {
      const category = await createRequest(data)
  
      
      
      return category;
    } catch (error) {
      console.log(error);
      return {
        error: `🥹 Something went wrong! \n Error code: ${error}`,
      };
    }
  }

 