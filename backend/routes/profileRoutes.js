const router = require('express').Router()
const Profile = require('../models/Profile')



router.post('/', async (req, res) => {

    
    const { name, genre, yearsOld, email, password, approved } = req.body
    
    const  profile = {
        name,
        genre,
        yearsOld,
        email,
        password,
        approved
    }

    try {
        
    await Profile.create(profile)

    res.status(201).json('Perfil cadastro com sucesso!')
    
    } catch (error) {   
       
        if (error.kind = 'required'){
              res.status(402).json({erro:'campo inválido'});
            
            }
        
        }

})


module.exports = router