import {db} from "../connect.js";

export const addPersonalInfo = (req, res) => {
    const { userId, name, address, city, state, religion, gender } = req.body;
  
    const q = "INSERT INTO personal (userId, name, address, city, state, religion, gender) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
    const values = [
      userId,
      name,
      address,
      city,
      state,
      religion,
      gender
    ];
  
    db.query(q, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Error adding personal information");
      }
      return res.status(200).json("Personal information added successfully");
    });
  };
  