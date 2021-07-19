
//metodos: index, show, update, store, destroy
/*
index: listagem de sessoes 
store: criar uma sessao com usuario
show: listar um unica sessao
update:
alterar alguma sessao
destroy: quando queremos deletar uma sesssao
*/

import User from '../models/User';
import * as Yup from 'yup';

class Sessioncontroller{
    async store(req , res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        const {email} = req.body;

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Falha na autenticação '})
        }

        //verificando se o usuário já existe
        let user = await User.findOne({ email});

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}

export default new Sessioncontroller();