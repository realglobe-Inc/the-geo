the-geo
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-geo
[bd_travis_url]: http://travis-ci.org/the-labo/the-geo
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-geo.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-geo
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-geo.svg?token=
[bd_license_url]: https://github.com/the-labo/the-geo/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/the-geo
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-geo.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Geo location utility

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-geo --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const {TheGeo} = require('the-geo')

async function tryExample () {

  const geo = new TheGeo()

  const {lat, lng} = await geo.detect()
  console.log('current geo location', {lat, lng})

}

tryExample().catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-a-p-i-guide-md"></a>

API Guide
-----

+ [the-geo@1.0.2](./doc/api/api.md)
  + [create(args)](./doc/api/api.md#the-geo-function-create)
  + [TheGeo](./doc/api/api.md#the-geo-class)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-geo/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
