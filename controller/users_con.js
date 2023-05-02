const fs=require('fs');

// const index=js.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const users=data.users;

exports.create=(req,res)=>{
    users.push(req.body);
    res.status(201).json(req.body);
}
exports.getAll=(req, res)=>{
    res.json(users);
}
exports.get=(req, res)=>{
    const id=+req.params.id;
    const user=users.find((p)=>p.id===id);
    res.json(user);
}
exports.replace=(req, res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex((p)=>p.id===id);
    users.splice(userIndex,1,{id:id, ...req.body});
    res.status(201).json({user: 'Updated'});
}
exports.update=(req, res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex((p)=>p.id===id);
    const user=users[userIndex];
    users.splice(userIndex,1,{...user ,...req.body});
    res.status(201).json({user: 'patched'});
}
exports.delete=(req, res)=>{
    const id=+req.params.id;
    const userIndex=users.findIndex((p)=>p.id===id);
    const user=users[userIndex];
    users.splice(userIndex,1);
    res.status(201).json(user);
}