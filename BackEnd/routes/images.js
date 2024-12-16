const router = require("express").Router();
let Image=require("../models/Image");

// http://localhost:8070/image/addImage

router.route("/addImage").post((req,res)=>{

    const fileName=req.body.fileName;
    const category=req.body.category;
    const date=Date(req.body.date);
    const userId=req.body.userId;

    const newImage=new Image({
        fileName,
        category,
        date,
        userId
    })

    newImage.save().then(()=>{
        res.json("Image Added")
    }).catch((err)=>{
        console.log(err);
    })

})

// http://localhost:8070/image/

router.router("/"),get((req, res) => {
    Image.find().then((images)=>{
        res.json(images)
    }).catch((err)=>{
        console.log(err)
    })
});

//// http://localhost:8070/image/update/:id

router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;

    const {name,age,gender}=req.body;

    const updateStudent={

        name,age,gender

    }

    const update=await Image.findByIdAndUpdate(userId, updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated",user:update     })
     }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
     })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await Image.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({
            status: "Error with delete user ",error:err.message
        });
    })
})

router.route("/get/:id").get(async(req)=>{
    let userId=req.params.id;
    const user
})

module.exports = router;
