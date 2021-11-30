
const express=require ('express')
const router=express.Router()
const Contact=require('../Backend/models/Contact')


router.post('/',async(req,res)=>{
    const {name,email,age}=req.body
    try {
        const contact=new Contact({
            name,email,age
        })
        await contact.save()
        res.send({msg:'contact added',contact})
    } catch (error) {
        console.log('no added')
    }
   
})

router.get('/',async(req,res)=>{
    try {
        const contact =await Contact.find()
        res.send({msg:'list contact',contact})
    } catch (error) {
        res.send('server error')
    }
})

router.delete('/:contactID',async(req,res)=>{
  const  {contactID} = req.params
  try {
      await Contact.findByIdAndDelete(contactID)
      res.send('contact deleted')
  } catch (error) {
      res.send(error)
  }
})

router.put('/:contactID',async(req,res)=>{
    const {contactID}=req.params
    // const {name,email,age}=req.body
    try {
        await Contact.findByIdAndUpdate(contactID,{$set:{...req.body}})
        res.send('contact update')
    } catch (error) {
        res.end(error)    }
})

router.get('/:contactID',async(req,res)=>{
    const {contactID}=req.params
    try {
        const contact=await Contact.findOne({_id:contactID})
        res.send(contact)
    } catch (error) {
        res.send('server error')
    }
})





module.exports=router