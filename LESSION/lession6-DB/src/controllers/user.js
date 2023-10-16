import userModel from '../model/User.js'
import bcrypjs from 'bcryptjs'
import  jwt  from 'jsonwebtoken';


const sigUp = async (req, res) => {
     try {
        const {username, password, name, age, role } = req.body;

        const user = await userModel.findOne({
         username
        })

        if(user) {
         return res.status(400).json({ 
            message: "Người dùng đã tồn tại"
         })
        }

        const salt = bcrypjs.genSaltSync();
        const passwordHash = bcrypjs.hashSync(password, salt)


        const newUser = await userModel.create({
         username ,
         password: passwordHash,
         name,
         age,
         role
        })

        return res.status(200).json({ message: "Tạo người dùng thành công", user: newUser})
        
     } catch (error) {
        return res.status(500).json({ message: "false" })
     }
};

const login = async (req, res) => {
   const {username, password } = req.body;


   const user = await userModel.findOne({ username})


   if(!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" })
   }

   const checkPassword = bcrypjs.compareSync(password, user.password)

   if(!checkPassword) {
      res.status(400).json({ message: "Sai mật khẩu"})
   }

   const token =  jwt.sign({
      id: user.id
   }, process.env.JWR_SECRET_KEY , {
      expiresIn: '1d'
   })

   return res.status(200).json({user: user, token: token})
}

export {
   sigUp,
   login
}