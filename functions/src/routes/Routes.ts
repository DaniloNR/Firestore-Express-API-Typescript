import { GeneralRoutes } from './General'
import { Auth } from '../Middleware/Auth'
import { ClientRoutes } from './Client'

export class Routes {
  public auth: Auth = new Auth()
  public clientRouter: ClientRoutes = new ClientRoutes()
  public generalRouter: GeneralRoutes = new GeneralRoutes()

  constructor (api) {
    this.routeMiddleware(api)
    this.routerSetup(api)
  }

  public routeMiddleware(api) {
    api.use(this.auth.firebaseAuth)
  }

  public routerSetup(api):void {
    this.clientRouter.routes(api)
    this.generalRouter.routes(api)
  }
}