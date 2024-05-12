import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@lib/services';

type AuthGuardOptions = {
    requiresAuthentication: boolean;
};

const defaultAuthGuardOptions = (): AuthGuardOptions => ({
    requiresAuthentication: true,
});

export const authGuard = (options: AuthGuardOptions = defaultAuthGuardOptions()): CanMatchFn => {
    return (_: Route, segments: UrlSegment[]) => {
        const router = inject(Router);
        const authService = inject(AuthService);

        if (options.requiresAuthentication === authService.isAuthenticated) return true;

        return options.requiresAuthentication
            ? router.createUrlTree(['/auth/login'], {
                  queryParams: {
                      returnUrl: segments.map((s) => s.path).join('/'),
                  },
              })
            : router.createUrlTree(['/']);
    };
};
