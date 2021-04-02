const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    
    uniq_id: {type : String},

    crawl_timestamp: {type : String},
    
    product_id: {type : String},

    link:{type : String},

    size:{type : String},

    variant_sku:{type : String},

    brand:{type : String},

    care_instructions:{type : String},

    dominant_material:{type : String},

    title:{type : String},

    actual_color:{type : String},

    dominant_color:{type : String},

    product_type:{type : String},

    images:{type : String},

    body:{type : String},

    product_details:{type : String},

    size_fit:{type : String},

    complete_the_look:{type : String},

    type:{type : String},

    variant_price:{type : String},

    variant_compare_at_price:{type : String},

    ideal_for:{type : String},

    is_in_stock:{type : String},

    inventory:{type : String}

});

module.exports = mongoose.model('Products', productSchema);