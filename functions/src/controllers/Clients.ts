import { Request, Response } from 'express'
import ClientRepository from '../repositories/Clients'

export class ClientController {

  public create (req: Request, res: Response) {
    ClientRepository.create(req.body)
      .then(client => { res.status(200).json(client.id) })
      .catch(err => {res.status(500).json(err)})
  }

  public read (req: Request, res: Response) {
    ClientRepository.read()
      .then(clients => {
        let results = []
        clients.forEach(client => results.push({ id: client.id, data: client.data() }))
        if (results.length) {
          res.status(200).json(results)
        } else {
          res.status(404).json({detail: 'No records found'})
        }
      }).catch(err => {res.status(500).json(err)})
  }

  public update (req: Request, res: Response) {
    ClientRepository.update(req.params.id, req.body)
      .then(client => { res.status(201).json(client) })
      .catch(err => {res.status(500).json(err)})
  }
  
  public delete (req: Request, res: Response) { 
    ClientRepository.delete(req.params.id) 
      .then(() => { res.status(200).json({detail: `Client id: ${req.params.id} deleted!`}) })
      .catch(err => {res.status(500).json(err)})
  }
  
  public find (req: Request, res: Response) {
    ClientRepository.find(req.params.id)
      .then(client => {
        if (client.exists) {   
          res.status(200).json(client.data())
        } else {
          res.status(404).json({detail: 'lol!'})
        }
      }).catch(err => {res.status(500).json(err)})
  }
}