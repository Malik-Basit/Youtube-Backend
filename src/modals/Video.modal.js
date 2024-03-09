import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videourl: {
        type: String,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    ispublish:{
        type: Boolean,
        required: true,
    }
})

videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model("Video", videoSchema);