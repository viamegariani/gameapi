import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { Logger } from '@nestjs/common';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger('HTTP');
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
      const { ip, method, originalUrl } = request;
  
      return next.handle().pipe(
        tap(() => {
          const { statusCode } = context.switchToHttp().getResponse();
          this.logger.log(
            `IP: ${ip}, Method: ${method}, URL: ${originalUrl}, Status: ${statusCode}`,
          );
        }),
      );
    }
  }
  