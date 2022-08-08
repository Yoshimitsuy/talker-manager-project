const crypto = require('crypto');

function generateToken() { 
  return crypto.randomBytes(8).toString('hex');
 }
 
 const matrixToken = (req, res) => {
   const { email, password } = req.body;
  //  console.log(email);
   if (!email || !password) {
     return res.status(400).json({ message: 'Email and password are required' });
   }
   const token = generateToken();
 
   return res.status(200).json({ token });
 };

 module.exports = {
  generateToken,
  matrixToken,
 };
