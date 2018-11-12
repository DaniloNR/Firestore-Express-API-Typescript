import { Request, Response } from 'express'

export class GeneralController {
  
  public getRoutes (req: Request, res: Response) {                
    res.status(200).json({ 
      routes: {
        '/': ['get'],
        '/clients': ['get', 'post'],
        '/client/:id': ['get', 'put', 'delete']
      }
    })
  }
  
  public handShake (req: Request, res: Response) {
    res.status(200).json({
      message: `You're logged in as ${res.locals.user.email} with Firebase UID: ${res.locals.user.user_id}`
    })
  }
  
  public notFound (req: Request, res: Response) {
    res.status(404).json({ error: 'Not Found!'})
  }
}