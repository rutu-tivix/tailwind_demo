import axios from "axios";

let API_KEY = "1wr30l1c5h99aag107byr2kwqpdoxu";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY,
    "Authorization":"Bearer oz6dcth4f0e0lvoxy4vd0sj0ydhntg",
    
  }
});

export default api;
