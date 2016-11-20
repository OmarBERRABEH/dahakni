import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const dahakniSchema = new Schema({
	cuid: 		{type: 'String', required: true},
	content: 	{type: 'string', required: true},
	status: 	{type: 'String', enum: ['view', 'append', 'removed'], required: true},
	_owner: 	{type: Number, ref: 'User' },
	dateAdded:  {type: 'Date', default: Date.now, required: true}
});


export default mongoose.model('Dahakni',dahakniSchema);