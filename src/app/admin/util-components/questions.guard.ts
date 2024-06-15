import { CanActivateFn } from '@angular/router';

export const questionsGuard: CanActivateFn = (route, state) => {
  return true;
};
