import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.log(err));
=======
  .catch(err => console.error(err));
>>>>>>> f987489254a231685d1e8f7f895d2478f7782125
