import { Logger, Module, OnModuleInit } from "@nestjs/common";
import { HttpModule as BaseHttpModule, HttpService } from "@nestjs/axios";

@Module({
    imports: [
        BaseHttpModule,
    ],
    exports: [
        BaseHttpModule,
    ],
})
export class HttpCustomModule implements OnModuleInit {
    constructor(private httpService: HttpService) { }

    onModuleInit() {
        const logger = new Logger('[Nestjs Axios Base Logger]');
        const axios = this.httpService.axiosRef;
        axios.interceptors.request.use(function (config) {
            config['metadata'] = { ...config['metadata'], startDate: new Date() };
            return config;
        });
        axios.interceptors.response.use(
            (response) => {
                const { config } = response;
                config['metadata'] = { ...config['metadata'], endDate: new Date() };
                const duration = config['metadata'].endDate.getTime() - config['metadata'].startDate.getTime();
                logger.log(`${config.method.toUpperCase()} ${config.url} ${duration}ms`);
                return response;
            },
            (err) => {
                logger.error(err);
                return Promise.reject(err);
            });
    }
}
