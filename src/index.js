'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const endpoints = require('./endpoints');

router.get('/', endpoints.root);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
