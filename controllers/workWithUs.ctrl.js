import WorkWithUsDB from "../models/WorkWithUs.js";


const getAll = async (req, res) => {
  try {
    const allData = await WorkWithUsDB.find();
    res.send(allData);
  } catch (error) {
    res.send("Got error");
  }
};

const deleteSome  = async(req,res)=>{
    try {
        // const deletedData  = await WorkWithUsDB.deleteMany();
        // res.status(200).json({
        //     status:"Success",
        //     data:deletedData
        // })
    } catch (error) {
        
    }
}
const createWorkWithUs = async (req, res) => {
  try {
    const newEntry = await WorkWithUsDB.create(req.body);
    
    return res.status(200).json({
      status: "Success",
      data: newEntry,
    });
  } catch (error) {
    res.status(400).send("Not working file");
  }
};


// operations for worj with us items


const createWorkWithUsItems =async (req,res)=>{
try {
  const entry = await WorkWithUsDB.findById(req.params.id);
  if (!entry) {
    return res.status(404).json({ success: false, message: "Entry not found" });
  }

  entry.workWithUsOpt.push(req.body);
  await entry.save();

  return res.status(200).json({ success: true, data: entry.workWithUsOpt });
} catch (error) {
  return res.status(500).json({ success: false, message: error.message });
}
}

// update fn
const updateWorkWithUsItems = async (req, res) => {
 try {
   const { id, itemId } = req.params;
   const entry = await WorkWithUsDB.find({ _id: id });
   if (!entry) {
     return res
       .status(404)
       .json({ success: false, message: "Entry not found" });
   }

   // console.log(entry[0].carousel);
   const itemIndex = entry[0].workWithUsOpt.findIndex(
     (itemData) => itemData._id.toString() === itemId
   );
   // console.log(imageIndex);

   if (itemIndex === -1) {
     return res.status(404).json({ success: false, message: "Item not found" });
   }
//    console.log("reached");
   entry[0].workWithUsOpt[itemIndex] = {
     ...entry[0].workWithUsOpt[itemIndex],
     ...req.body,
   };
   await entry[0].save();

   return res.status(200).json({ success: true, data: entry.workWithUsOpt });
 } catch (error) {
   return res.status(500).json({ success: false, message: error.message });
 }
};

// delete fn
const deleteWorkWithUsItems = async (req, res) => {
  try {
    const { id, itemIndex } = req.params;
    const entry = await WorkWithUsDB.find({ _id: id });

    if (!entry) {
        return res
        .status(404)
        .json({ success: false, message: "Entry not found" });
    }
    
    // console.log(entry[0].workWithUsOpt);
    const imageIndex = entry[0].workWithUsOpt.findIndex((imageData) => 
        // {
        // console.log(imageData._id.toString()===itemIndex);
        imageData._id.toString() === itemIndex)
    //   }
    // );
    if (imageIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }
    entry[0].workWithUsOpt.splice(imageIndex, 1);
    await entry[0].save();

    return res.status(200).json({ success: true, data: entry });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default {
 getAll,
    createWorkWithUs,
    deleteSome,
// work with options
createWorkWithUsItems,
updateWorkWithUsItems,
deleteWorkWithUsItems
};
