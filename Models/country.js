const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CountrySchema = new Schema({
    name: { type: String, 
        required: true},
    isoCode: { type: String},
    center: {
      lat: { type: Number },
      lng: { type: Number },
    },
    image: { type: String }, 
    {
    timestamps: true,
    collation: { locale: "en", strength: 2 }, 
  }
});
