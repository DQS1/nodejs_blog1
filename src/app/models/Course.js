import mongoose from 'mongoose';
import mongooseSlugUpdater from 'mongoose-slug-updater';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(mongooseSlugUpdater);

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
const Course = mongoose.model('Course', CourseSchema);
export default Course;
