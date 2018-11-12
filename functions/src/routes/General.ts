import { GeneralController } from '../controllers/General'
import * as express from 'express'

export class GeneralRoutes {
  public generalController: GeneralController = new GeneralController()
  public router: express.Router = express.Router()

  public routes(api):any {
    this.router.get('/', this.generalController.getRoutes)
    this.router.get('/handshake', this.generalController.handShake)
    this.router.all('*', this.generalController.notFound)

    api.use('/', this.router)
  }
}
