<h1 ></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">DaaS library to handle Daas Clients</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

## This is an example how to use it

https://gitlab.com/cencosud-ds/cencommerce/post-purchase-experience/fulfilment/delivery/backend/integrations-components/beetrack-integration-component

## Changes from 0.0.7

- Added a new `findByExternalSystemOrderId` method in `DispatchService`. You can find a dispatch with an externalSystemOrderId.
Returns a `Promise<any>`

## Changes from 0.0.6

- The method `findAllById` on `DispatchService` now uses `DISPATCH_BASE_URL` environment variable to connect with Delivery dispatch service


## Changes from 0.0.5

- The method `findAllById` on `DispatchService` now is HTTP GET request and use query params 

```json
${url}/?ids=1983,1234,1234
```

## Changes from 0.0.4

- The method `findAllById` on `DispatchService` now requires another json structure to make the proper request. Example below.

```json
 {
  "dispatch": {
    "ids": [
      "dispatchIds"
    ]
  }
}
```