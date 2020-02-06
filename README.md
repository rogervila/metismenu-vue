<p align="center"><img width="200" src="https://image.flaticon.com/icons/svg/718/718970.svg" alt="metismenu-vue" /></p>

[![Build Status](https://travis-ci.org/rogervila/metismenu-vue.svg?branch=master)](https://travis-ci.org/rogervila/metismenu-vue)
[![StyleCI](https://github.styleci.io/repos/206565517/shield?branch=master)](https://github.styleci.io/repos/206565517)

[![NPM](https://nodei.co/npm/metismenu-vue.png?compact=true)](https://nodei.co/npm/metismenu-vue/)

# Metismenu Vue

## About
**metismenu-vue** is a [MetisMenu](https://github.com/onokumus/metismenujs) plugin VueJS Wrapper.


## Usage

### Javascript setup

This is the default setup:

```js
import metismenu from 'metismenu-vue';

// Check MetisMenu options: https://github.com/onokumus/metismenujs#options
const options = {
  preventDefault: true,
  toggle: true
};

const menu = [
  {
    text: 'Dashboard',
    active: true, // optional. MetiMenu will handle the current active element on every click
    hasArrow: true, // optional. Check MetisMenu plugin usage: https://github.com/onokumus/metismenujs#usage
    children: [
      {
        text: 'Test',
        href: '/my-test-route'
      },
      {
        text: 'Subchildren',
        children: [
          {
            text: 'Subchild Test',
            href: '/subchild'
          },
          {
            text: 'Subchild Test 2',
            href: '/subchild2'
          }
        ]
      }
    ]
  },
  {
    text: 'Blog',
    href: '/blog'
  }
];

new Vue({
  template: `
  <div>
      <metismenu id="mymenu" :menu="menu" :options="options" class="my-own-class" v-on:mmclick="handleClickEvent" />
  </div>
  `,
  components: {
    metismenu: metismenu,
  },
  data: {
    menu: menu,
    options: options
  },
  methods: {
    handleClickEvent(item) {
      console.log('Item has been clicked!', item)
    }
  }
}).$mount('#app');
```

## License

**metismenu-vue** is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
