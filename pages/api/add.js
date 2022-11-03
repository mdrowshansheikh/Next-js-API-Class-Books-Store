import User from '../../models/Task';
import connectDB from '../../utils/connectDB';

const addUser = async (req, res) => {
  console.log('Connectiong to the database...');
  await connectDB();
  console.log('Connected to the database');
  console.log('Creating user....');
  const user = await User.create(req.body);
  console.log(req.body);
  console.log('Created user');
  res.status(200).json({ user });
};

export default connectDB;
