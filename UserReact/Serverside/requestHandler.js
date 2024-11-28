import dataSchema from './model/data.js'

export async function adduser(req,res) {
    // console.log(req.body)
    const {...data}= req.body
    dataSchema.create({...data}).then(()=>{
        res.status(201).send({msg:"Added Successfully"})
    }).catch((error)=>{
        res.status(500).send({error:error})  
    })  
}

export async function getUser(req, res) {
    const data=await dataSchema.find()
    // console.log(data)
    res.status(200).send(data)
}

export async function getdata(req, res) {
    const _id = req.params.id;
    try {
      const data = await dataSchema.findOne({ _id });
      if (!data) {
        return res.status(404).send({ message: "Data not found" });
      }
      res.status(200).send(data)
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
}

export async function update(req,res) {
    // console.log(req.body);
    const {...data}=req.body
    
    await dataSchema.updateOne({_id:req.params.id},{$set:{...data}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error:error})  
    })  
}

export async function deleteUser(req, res) {
    // console.log(req.params); 
    const { id } = req.params
    const data = await dataSchema.deleteOne({ _id: id }).then(() => {
        res.status(201).send({ msg: "Deleted" });
    })
    .catch((error) => {
        res.status(500).send({ error });
    });
}