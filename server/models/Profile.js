const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'User is required.'],
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
		timestamps: true,
	}
);

// profileSchema.virtual('projects', {
// 	ref: 'Project',
// 	localField: '_id',
// 	foreignField: 'user',
// });

model('Profile', profileSchema);
