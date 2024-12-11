const form = require('../model/Form');
const createForm = async(req,res)=>{
    try{
        const newForm = new From (req.body);
        await newForm.save();
        res.status(201).json(newForm);

    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const getFormById = async(req,res)=>{
    try{
        const form = await From.fingById(req.params.id);
        res.status(200).json(form);

    }catch (error){
        res.status(500).json({message: error.message});
    }
};

const submitFormResponse = async (req, res)=> {
    try{
        const form = await Form.findById(req.params.id);
        form.responses.push(req.body);
        await form.save();
        res.status(200).json(form);

    } catch (error){
        res.status(500).json({ message: error.message});

    }
};

module.exports = { createForm, getFormById, submitFormResponse};
