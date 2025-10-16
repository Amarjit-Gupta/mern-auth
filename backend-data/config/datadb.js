import mongoose from "mongoose";

if (!mongoose.connection.readyState) {
    mongoose.connect("mongodb+srv://guptaamarjit777:4CimwemWzP2chirV@my-cluster.pz0rn.mongodb.net/mern-project").then(() => {
        console.log("data's database connected..");
    }).catch((err) => {
        console.log("data's database connection failed...");
    });
}

const userSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    company: { type: String },
    category: { type: String },
    file: { type: String },
}, { timestamps: true });

const Data = mongoose.models.MernData || mongoose.model("MernData", userSchema);
export default Data;
