import cloudinary from "../Config/cloudinaryConfig.js";
import streamifier from "streamifier";
import productModel from '../Model/productSchema.js'

const addProduct = async (req, res) => {

  const { data } = req.body
  try {

    // Opload Image on cloudinary
    if (!req.files || req.files.length === 0) {
      return res.json({ success: false, message: "Please upload images" });
    }

    const uploadToCloudinary = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "ecommerce",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        streamifier.createReadStream(fileBuffer).pipe(uploadStream);
      });
    };

    const uploadPromises = req.files.map((file) =>
      uploadToCloudinary(file.buffer)
    );

    const results = await Promise.all(uploadPromises);

    const imageUrls = results.map((result) => ({
      url: result.secure_url,
      publicId: result.public_id,
    }));

    // Create Product in Database
   const newProduct = new productModel({
    name: data.name,
    desc: data.desc,
    category: data.category,
    mrpPrice: data.mrpPrice,
    sellPrice: data.sellPrice,
    quantity: data.quantity,
    admainName: req.body.userName,
    images: imageUrls
   })
    
   await newProduct.save()

    return res.json({ success: true, message: "Product uploaded successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some error occurred" });
  }
};

export { addProduct }
