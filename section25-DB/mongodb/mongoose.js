const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017/mongoosetelephones";

mongoose.connect(url)

const telephoneSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  brand:{
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 24
  },
  name:{
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 32
  },
  color:{
    type: String,
    required: false,
    trim: true,
   enum:["red", "yellow", "green", "gold", "silver"]
  },
  age:{
    type: Number,
    required: false,
    default: 0,
    validate:{
      validator: function (v) {
        return v >=0
      },
      message: "Age can`t be negative"
    }
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

const Telephone = mongoose.model("Telephone", telephoneSchema)

const telephone1 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Nokia",
  name: "X1",
  color: "red",
  age: 1
})

const telephone2 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Sony",
  name: "X2",
  color: "green",
  age: 1
})

const telephone3 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Samsung",
  name: "X1",
  color: "silver",
  age: 3
})




async function main(){

  try{

    await Telephone.deleteOne({brand: "Nokia"})
    await Telephone.deleteMany({})

    // const telephone1Db = await telephone1.save()
    const telephoneArr = [telephone1, telephone2, telephone3]
    await Telephone.insertMany(telephoneArr)

    const phoneByBrand = await Telephone.findById(telephone1._id)
    console.log(phoneByBrand)

    const telDb = await Telephone.findOne({
      brand: "Sony", name: "X2"
    })
    console.log(telDb)

    const updatedTelDb = await Telephone.findOneAndUpdate({
      brand: "Sony", name: "X2"
    },{
      color: "silver",
      age: 10
    },{
      new: true
    })
    console.log(updatedTelDb)

  }
  catch(err){
    console.log(err)
  }
  finally{
    await mongoose.disconnect()
  }
}
main()