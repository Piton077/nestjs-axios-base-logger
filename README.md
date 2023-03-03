<h1 ></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">Nestjs Axios Logger</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>
<p> This package helps to log nestjs inbound and outgoing http requests</p>

## Quick start
Have to:
-  import HttpCustomModule from nestjs axios logger base
That's all, enjoy it !

```js

import { HttpCustomModule } from 'nestjs-axios-logger-base';

@Module({
  imports: [HttpCustomModule, HttpModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
```