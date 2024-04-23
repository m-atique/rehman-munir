import axios from 'axios'


const getmaxid =async(table,id)=>{

    const ids =  await axios.post('/api/general/maxid',{id:id,table:table})
   
    return ids.data.maxid
     
    
  }

  export {getmaxid}