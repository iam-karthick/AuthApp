import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenIntercentorService implements HttpInterceptor {

  constructor(private injector:Injector ) { }

  intercept(req,next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        authorization:`Bearer ${authService.GetToken()}`
      }
    });
    return next.handle(tokenizedReq)
  }
}
