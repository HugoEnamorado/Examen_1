import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MercaditoExamen',
  connector: 'mssql',
  url: 'mssql://Henamorado_SQLLogin_1:4c17vko2di@Mercado-H.mssql.somee.com/Mercado-H',
  host: 'Mercado-H.mssql.somee.com',
  port: 1433,
  user: 'Henamorado_SQLLogin_1',
  password: '4c17vko2di',
  database: 'Mercado-H'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MercaditoExamenDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MercaditoExamen';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MercaditoExamen', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
