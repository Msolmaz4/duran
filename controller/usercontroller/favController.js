// npm i jwt-decode jwt cozmek icin 
const { TokenExpiredError } = require('jsonwebtoken');
const jwt_decode =require('jwt-decode')
const Products =require('../../models/productModel')
const Users = require('../../models/userModel')



exports.addFavController = async (req,res)=>{

    try {
      //burada id product
      const { id } = req.params;
      //token header kisminda bukunur
      const { token } = req.headers;
      //const { token } = req zapabiliryi cunku is login token req.token esiledik
      //token cozuyorum
      const user = jwt_decode(token);
      //burada id gelur biye
      //postmande ornek olarak productan bir eleman aldim onun tokeni (logindensonra)
      //headerste key token yazdim tomeni yapistirdim
      //sonraparamas key id ve id yapistirdim
      //localhost:8005/user/fav/id=630a2b3921e7997aea928256 buna dikkat et duzelyme yapmak gerejbilri
      //sonra send allta id gorecelsin
      // { userId: '630a2b3921e7997aea928256', iat: 1661610837 }
      //altat ayricahata verdio ama mosdel bir duyelktemwistizor
     //Cast to ObjectId failed for value "id=630a2b3921e7997aea928256" (type string) at path "_id" for model
      //"Product"
     //console.log(user);

      const userId = user.userId;
  
      if (!id) return res.send("id yok");
      console.log(id)
      let product = await Products.findById(id);
      if (!product) return res.send("bulunamadi");
      
      const userInfo = await Users.findById(userId);
      if (!userInfo.favs.find((el) => el._id)) {
        //once icine pushladim sonra saveldedim
        userInfo.favs.push(product);
        userInfo.save();
        //on tarfata state guncellemek icin
        res.send(userInfo);
      } else {
        res.send("ekli");
      }


      //once producy bir tabene urun sec id
      //sonra login yap ordaki tokeni headers key token valur yapistir
      //sonra giris yaptigin sayfadan user fav id yap urun gelir fav ekli
      //ocalhost:8005/user/fav/6308a134c397e7db620fe6be
      //ekli
    } catch (error) {
          console.log(error.message)
          res.send('error')
    }


}

exports.deleteFav = async (req,res)=>{
  try {
    const {id} =req.params
    const {token} = req.headers
    const user =jwt_decode(token)
    const { userId} =user
    if(!id) return res.send('id yok delete')
    let product = await Products.findById(id)
    if(!product) return res.send('delete product weg')
    const userInfo =await Users.findById(userId)

    if(userInfo.favs.find(el=>el._id ==id)){
      const newFavs = userInfo.favs.filter(el=>el._id !=id)
      userInfo.favs=newFavs
      userInfo.save()
      res.send(userInfo)

    }else{
      res.send('no no')
    }



    
  } catch (error) {
    console.log(error)
    res.send(error.message)
    
  }

}