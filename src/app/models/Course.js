import mongoose from 'mongoose';
import MongooseDelete from 'mongoose-delete';
import mongooseSlugUpdater from 'mongoose-slug-updater';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }
  },
  { timestamps: true }
);

mongoose.plugin(mongooseSlugUpdater);
CourseSchema.plugin(MongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

const Course = mongoose.model('Course', CourseSchema);
export default Course;
