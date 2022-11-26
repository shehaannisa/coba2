const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    judul_artikel: {
        type: String,
        required: true
    },
    tglPost: {
      type: Date,
      default: Date.now
    },
    isi_artikel: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Admin', AdminSchema);

module.exports = Article;
