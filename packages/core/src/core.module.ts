import { XSRFTokenValidatorMiddleware } from './middlewares/xsrf-validator.middleware';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ErrorHandlerMiddleware } from './middlewares/error-handler.middleware';
import { BasicLogger } from './logger/basic-logger';
import { CryptoUtils } from './utils/crypto-utils';
import { Server } from './server';
import { Provider } from 'injection-js';
import { Configuration } from './configuration/configuration';
import { PROCESS } from './injector/internal-injection-tokens';
import { DateProvider } from './utils/date.provider';
import { ERROR_HANDLER_FACTORY, LOGGER } from './injector/external-injection-tokens';
import { XSRFTokenController } from './controllers/xsrf-token.controller';
import { SecureCookieMiddleware } from './middlewares/secure-cookie.middleware';

export const CORE_MODULE_PROVIDERS: Provider[] = [
  Server,
  Configuration,

  ErrorHandlerMiddleware,
  XSRFTokenValidatorMiddleware,
  XSRFTokenController,
  SecureCookieMiddleware,

  DateProvider,
  CryptoUtils,

  { provide: LOGGER, useClass: BasicLogger },
  { provide: PROCESS, useValue: process },
  { provide: ERROR_HANDLER_FACTORY, useValue: () => ErrorHandlerMiddleware },
];
