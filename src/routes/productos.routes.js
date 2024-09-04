import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/productos/list', async(req, res)=>{
    try{
        res.render('productos/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/productos/add', (req,res)=>{
    res.render('productos/add');
});

router.post('/productos/add', async(req, res)=>{
    try{
        res.redirect('/productos/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/productos/edit', (req,res)=>{
    res.render('productos/edit');
});

router.post('/productos/edit', async(req, res)=>{
    try{
        res.redirect('/productos/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//

export default router;
