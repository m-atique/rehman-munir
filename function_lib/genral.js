import axios from 'axios'


const getmaxid =async(table,id)=>{

    const ids =  await axios.get(`/gen/maxId/${table}/${id}`)
   
    return ids.data.maxId
     
    
  }

  export {getmaxid}