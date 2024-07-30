import Contacts from "../models/ContactUsMessages.js"
const createMessage = async (req, res) => {
  const response = await Contacts.create({ ...req.body });
  if (response) {
    res.send("message sent successfully");
  } else {
    res.send("Error sending the message");
  }
};

const getAllTheMessages = async (req, res) => {
  const response = await Contacts.find();
  if (response) {
    res.send(response);
  } else {
    res.send(404).send("Error fetchig the data");
  }
};

const getMessageById = async (req, res) => {
  const response = await Contacts.getById(req.params.id);
  if (response) {
    res.send(response);
  } else {
    res.status(404).send("Error getting the data");
  }
};

const deleteContactById = async (req, res) => {
  const response = await Contacts.findByIdAndDelete(req.params.id);
  if (response) {
    res.send("Message deleted");
  } else {
    res.send("Server Error");
  }
};

export default {
  createMessage,
  getAllTheMessages,
  getMessageById,
  deleteContactById,
};
