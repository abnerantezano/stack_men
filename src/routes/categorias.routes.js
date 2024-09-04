import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/categorias/list', async(req, res)=>{
    try{
        res.render('categorias/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/categorias/add', (req,res)=>{
    res.render('categorias/add');
});

router.post('/categorias/add', async(req, res)=>{
    try{
        res.redirect('/categorias/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/categorias/edit', (req,res)=>{
    res.render('categorias/edit');
});

router.post('/categorias/edit', async(req, res)=>{
    try{
        res.redirect('/categorias/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//

export default router;
