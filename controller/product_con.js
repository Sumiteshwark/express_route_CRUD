const fs=require('fs');

// const index=js.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

////For Create
exports.create=(req,res)=>{
    products.push(req.body);
    res.status(201).json(req.body);
}
////For Read
exports.getAll=(req, res)=>{
    res.json(products);
}
exports.get=(req, res)=>{
    const id=+req.params.id;
    const product=products.find((p)=>p.id===id);
    res.json(product);
}
////For Update
exports.replace=(req, res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id);
    products.splice(productIndex,1,{id:id, ...req.body});
    res.status(201).json({product: 'Updated'});
}
exports.update=(req, res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1,{...product ,...req.body});
    res.status(201).json({product: 'patched'});
}
////For Delete
exports.delete=(req, res)=>{
    const id=+req.params.id;
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json(product);
}