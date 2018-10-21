import { ExecutionContext, Injectable, NestInterceptor,  } from '@nestjs/common';
import { Observable } from 'rxjs';
// tslint:disable-next-line:no-submodule-imports
import { tap } from 'rxjs/operators';
import log from '../log';

@Injectable()
class LoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    const start = Date.now();
    return call$.pipe(
      tap(() => {
        const request = context.switchToHttp().getRequest();
        const ms = Date.now() - start;
        log.info(`${request.method} ${request.url} success - ${ms}ms`);
      }),
    );
  }
}

export default LoggingInterceptor;
