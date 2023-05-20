// export const {packagingView, packagingTeaView, imagesView} = adminRead ;
// export const {createTea, createCategory, createPackaging, createPackTea, createImage } = adminCreate ;
// export const {updateTea, updateCategory, updatePackaging, updatePackTea, updateImage} = adminUpdate ;
// export const {delteTea, detleteCategory, deletePackaging, deletePackTea, deleteImage} = adminDelete ;

const adminView = async (req, res) => {
    // display a dashboard's admin
    try {
        res.status(200).json({ msg: "Hello, you are in the dashboard's admin" });

    } catch (error) {

        res.status(500).json({ msg: "The server doesn't respond." });
        console.log(error);
    }
};

export default adminView;