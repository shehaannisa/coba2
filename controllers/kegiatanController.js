const Product = require("../models/kegiatan");
const ErrorResponse = require('../utils/errorResponse');
const cloudinary = require('../utils/cloudinary');



exports.createKegiatan = async (req, res, next) => {

    const { judul_kegiatan, tgl_kegiatan, lokasi_kegiatan, deskripsi } = req.body;


    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: "kegiatan",
            // width: 300,
            // crop: "scale"
        })
        const kegiatan = await Kegiatan.create({
            judul_kegiatan,
            tgl_kegiatan,
            lokasi_kegiatan,
            deskripsi
            // image: {
            //     public_id: result.public_id,
            //     url: result.secure_url
            // },
        });
        res.status(201).json({
            success: true,
            kegiatan
        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}

// exports.deleteKegiatan: async(req, res) => {
//     try {
//       const kegiatans = await Kegiatan.find({}, "-__v")
      
//       res.status(200).json({
//         message: "Getting Data Kegiatan",
//         data: kegiatans
//       })
//     } catch (error) {
//       res.status(500).json({ message: "Server Error" })
//     }
//   },

// Update product image in Cloudinary and product data in MongoDB.
exports.updateKegiatan = async (req, res, next) => {
    try {
        //current product
        const currentKegiatan = await Kegiatan.findById(req.params.id);

        //build the data object
        const data = {
            judul_kegiatan: req.body.judul_kegiatan,
            tgl_kegiatan: req.body.tgl_kegiatan,
            lokasi_kegiatan: req.body.lokasi_kegiatan,
            
        }

        //modify image conditionnally
        if (req.body.image !== '') {
            const ImgId = currentKegiatan.image.public_id;
            if (ImgId) {
                await cloudinary.uploader.destroy(ImgId);
            }

            const newImage = await cloudinary.uploader.upload(req.body.image, {
                folder: "kegiatan",
                width: 1000,
                crop: "scale"
            });

            data.image = {
                public_id: newImage.public_id,
                url: newImage.secure_url
            }
        }

        const kegiatanUpdate = await Kegiatan.findOneAndUpdate(req.params.id, data, { new: true })

        res.status(200).json({
            success: true,
            kegiatanUpdate
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

}



// delete product and product image in cloudinary
exports.deleteKegiatan = async (req, res, next) => {

    try {
        const kegiatan = await Kegiatan.findById(req.params.id);
        //retrieve current image ID
        const imgId = kegiatan.image.public_id;
        if (imgId) {
            await cloudinary.uploader.destroy(imgId);
        }

        const rmKegiatan = await Kegiatan.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: " Kegiatan deleted",

        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}
