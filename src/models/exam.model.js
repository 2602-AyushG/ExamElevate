import mongoose from "mongoose";
const examSchema = new mongoose.Schema({
    name:{                    //Name given to it
        type: String,
        required: true
    },
    subjectList:[{
        type: String,
        required: true
    }],
});

const ExamModel = mongoose.model('Exam', examSchema);
export default ExamModel;
