import multer from "multer";

const upload = multer({ dest: "uploads/" }); // Fix typo
export default upload;
