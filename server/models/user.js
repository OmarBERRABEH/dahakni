import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	fname: 		{type: 'String', required: true},
	lname: 		{type: 'String', required: true},
	email:		{type: 'String', required: true},
	status: 	{type: 'String', enum: ['accepted', 'denied', 'append'], required: true},
	dahaknies:  [{ type: Schema.Types.ObjectId, ref: 'Dahakni' }],
	dateAdded:  {type: 'Date', default: Date.now, required: true}
});

export default mongoose.model('User',userSchema);