import * as express from 'express'
import { ClientController } from '../controllers/Clients'

export class ClientRoutes {
  public clientController: ClientController = new ClientController()
  public router: express.Router = express.Router()

  public routes(api):any {
    this.router.get('/', this.clientController.read)
    this.router.post('/', this.clientController.create)
    this.router.get('/:id', this.clientController.find)
    this.router.put('/:id', this.clientController.update)
    this.router.delete('/:id',this.clientController.delete)

    api.use('/clients', this.router)
  }
}
