export const getProducts = async(req,res)=>{
    res.status(200).json({
        Message:"All products",
    });
};