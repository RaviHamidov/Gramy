import mongoose from 'mongoose';
const {Schema} = mongoose;


const markets = new Schema({name: String, place: String, image: String, createdAt: Date});
const market = mongoose.model('market', markets);
export default market;
