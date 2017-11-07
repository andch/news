'use strict';

import './module/record';
import './module/filter';

import "reflect-metadata";
import "es6-shim";

require('./main.scss');

var appContainer = document.querySelector('#app');


appContainer.innerHTML = '<div class="main-component"></div>';