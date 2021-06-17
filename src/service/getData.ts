import axios from "axios";
import { ResponseData } from "../type/Quiz.type";

export async function getQuizData(): Promise<ResponseData | any> {
    try {
        const response = await axios.get("/quizdata");
        if(response.data.success) {
            return response.data.quizdata;
        }
    } catch (err) {
        console.error(err);
    }
}


