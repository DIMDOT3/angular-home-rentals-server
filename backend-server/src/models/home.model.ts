import mongoose from 'mongoose';
import HomeSchema from '../schemas/home.schema';

const homeSchema = new mongoose.Schema(HomeSchema);

const Home = mongoose.model('Home', homeSchema);

export default Home;
