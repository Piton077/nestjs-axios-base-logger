import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from "@nestjs/axios"
import { HttpCustomModule } from './http-custom.module';
import { lastValueFrom } from "rxjs"
import { ConsoleLogger } from '@nestjs/common';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpCustomModule, HttpModule],
    }).setLogger(new ConsoleLogger()).compile();
    await module.init()
    service = module.get<HttpService>(HttpService);
  });

  it('should be defined', async () => {
    await lastValueFrom(service.post("http://localhost:3000/", { hello: "wor;ld" }, {
      headers: {
        "apitoken": "asdasd"
      }
    }))
    expect(service).toBeDefined();
  });
  it('should log good response', async () => {
    await lastValueFrom(service.get("http://localhost:3000/"))
    expect(service).toBeDefined()
  })
});
