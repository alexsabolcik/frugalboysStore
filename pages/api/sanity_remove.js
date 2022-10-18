import {client} from '../../lib/client'

//budweiser id b35870ae-4bcf-4700-bc58-d425a7c91f9f

//takes a input of cart items and marks as sold on sanity backend
//through client .patch function
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log("in remove handler")
            
            req.body.map((item) => {
                client
                 .patch(`${item._id}`)
                 .set({isSold: true})
                 .commit()
                 .then(() => {
                      console.log(String(item._id))
                 })
            })
            
            
            res.status(200).json({ message: 'worked' })
            
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        } 
    }else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }

}

