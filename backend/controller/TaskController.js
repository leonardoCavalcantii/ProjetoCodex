const Task = require('../models/Tasks');

const getAllTasks = async (req, res) =>{

    try{
        const tasksList = await Task.find();
        return res.render("index", { tasksList, task:null });
    }catch(err){
        res.status(500).send({error: err.message})
    }
    
};

const getById = async (req, res) =>{
    try {
    const taskList = await Task.find();
    if (req.params.method == "update"){
        const task = await Task.findOne({_id:req.paams.id});
        res.render("index", {task, taskDelete: null}, taskList)
    }else{
        const taskDelete = await Task.findOne({_id:req.params.id});
        res.render("index", { task: null, taskDelete, taskList });
    }
    res.render("index", {task, taskList});
    }catch(err){
        res.status(500).send({error: err.message}) 
    }

};


const updateTask =  async (req, res) =>{

    try {
    const task = req.body;
    await Task.updateOne({_id: req.params.id}, task)
    res.redirect('/getAllTask')
    }catch(err){
        res.status(500).send({error: err.message})
    }

};


const createTask = async (req, res) => {
    const task = req.body;

    if(!task.task){
        return res.redirect("/")
    }

    try {
        await Task.create(task);
        return res.redirect('/getAllTask');
    } catch(err){
        res.status(500).send({error: err.message})
    }
};


const deleteOneTask = async (req, res) => {
    
    try {
        await Task.deleteOne({_id: req.params.id});
        res.redirect("/");
    }catch(err){
        res.status(500).send({error:err.message});
    }

}


module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateTask,
    deleteOneTask
}