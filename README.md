
# Map Explorer

## Description

My experiment learning [Nest](https://github.com/nestjs/nest) framework by implementing a simple Map Explorer API using the TypeScript starter repository.
Uses a PostGreSQL database running in docker container for data layer. The goal is to ingest the data and store it in a [GeoJson][6] format that would work with [Leaflet][5] on the front end to render the points in a useful fashion.
## Dev Notes
Initially I just used [this site][7] to generate some sample JSON data from the CSV, but then as the model started to get more refined, I used [this site][1] to get the Powershell commands to extract data from the NY City Street Maps based on the [data dictionary][4] and then [csvtojson][2] to convert the sample data from csv to json for easier loading in [Insomnia][3] for testing the API side.
The I found that NestJS supported a simple file upload option, so I instead refactored to use that to upload my sample data instead.
I switched context and configured the `Dockerfile` and `docker-compose.yml` to also stand up the api in a container, and then added the `launch-settings.json` file for VSCode to allow debugging thru here instead.
TODO:
- Refactor the TaxiTrip entity to use a GeoJSON friendly format. Thinking geodata as the primary domain , not the taxitrip. This is based on how Leaflet would more easily use the data from here to render.
- Add a service that will process a file once uploaded and store the data in the database
- Add the Web app to the docker-compose.yml as part of a production ready deployment for the entire environment.

## Installation
Copy the .env.example file to .env to start using the default database parameters
Start the database using `docker-compose up` or `docker-compose up -d` if you want it to detach. File should be run from the root folder as the `docker-compose.yml` file uses relative paths to find all the files needed.
```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```


## Code Author info

- Author - [Nissan Dookeran](https://linkedin.com/in/nissandookeran)
- Website - [https://redditech.blog](https://redditech.blog/)
- Twitter - [@redditech](https://twitter.com/redditech)


## Built using...
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## License

  Nest is [MIT licensed](LICENSE).

[1]:https://stackoverflow.com/questions/28908638/extract-only-the-first-10-lines-of-a-csv-file-in-powershell/28908834
[2]:https://github.com/Keyang/node-csvtojson
[3]:https://insomnia.rest/
[4]:https://www1.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf
[5]:https://leafletjs.com/examples/geojson/
[6]:https://tools.ietf.org/html/rfc7946
[7]:https://csvjson.com/csv2json