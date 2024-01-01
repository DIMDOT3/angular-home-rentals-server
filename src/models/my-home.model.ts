import mongoose from 'mongoose';
import HomeSchema from '../schemas/home.schema';

const myHomeSchema = new mongoose.Schema(HomeSchema);

const MyHome = mongoose.model('MyHome', myHomeSchema);

export default MyHome;