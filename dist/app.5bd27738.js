// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/scripts/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var anime = [{
  title: 'Naruto',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'Onepunchman',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'Solo leveling',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'Boruto',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'One Peace',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'Bleach',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'Hunter x Hunter',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}, {
  title: 'God tower',
  desc: 'Это история, в которой рассказывается про мальчика-ниндзя. Он мечтает стать Хокаге: главой своей деревни. Но Хокаге – это самый мудрый и сильный ниндзя деревни, поэтому парень попытается преодолеть кучу испытаний, победить множество противников, заслужить уважение, подрасти морально и физически.',
  year: 1997,
  type: 'serial',
  series: 220,
  genres: []
}];
var animeNews = [{
  title: 'С 12 апреля сайт снова заблокировали в РФ (обн. 15.04)',
  date: '13 Мая'
}, {
  title: 'Блокировка сайта в Казахстане (обновлено 16.04)',
  date: '12 Апр'
}, {
  title: 'Запреты аниме (только) в РФ (обновлено 17.05)',
  date: '12 Мар'
}, {
  title: 'Семь универсальных сюжетов ч.2',
  date: '3 Мар'
}, {
  title: 'Семь универсальных сюжетов ч.1',
  date: '1 Мар'
}, {
  title: 'Студия «Ghibli»',
  date: '23 Фев'
}];
var animeAdt = {
  title: 'Фантастический мир с обращённым в красавицу мужчиной и…',
  date: '10 Мая',
  genres: ['Комедия', 'Романтика', 'Приключения', 'Фантастика']
};
var animeLastUpdate = {
  title: 'Король бойцов: на другой день',
  year: '2005',
  type: 'ONA',
  series: '4',
  genres: ['Сёнэн', 'Драма', 'Приключения'],
  ageRating: 'PG-13(от 13 лет)'
};
var an = {
  title: 'Тетрадь смерти',
  views: '7 096 408',
  year: 2006,
  ageRating: 'R-17+',
  genres: ['Сёнэн', 'Детектив', 'Драма', 'Мистика', 'Триллер', 'Демоны', 'Сверхъестественное'],
  type: 'Сериал',
  series: 37,
  img: 'img/1564936827.jpg',
  desc: 'Уставший от ухудшающегося мира и от немногословиях своих собратьев, синигами Рюук отправляет на Землю Тетрадь Смерти, наблюдая за тем, что же интересное из этого получится. Его план начинает исполняться, когда Тетрадь Смерти поднимает гениальный ученик старшей школы Лайт Ягами, которому так же наскучил окружающий его мир. Изначально Лайт рассматривал рукопись как чью-то неудавшуюся шутку, но вскоре, экспериментальным путем Лайт открывает правду, написанную в Тетради Смерти. Нужно всего лишь создать изображение человека у себя в уме в тот момент, когда он пишет его имя в Тетради Смерти, и тогда, этот человек умрет через 40 секунд от сердечного приступа. Вооружившись такой невиданной силой, Лайт становится неуловимым убийцей, и он решает сделать этот мир лучше, истребляя криминальных авторитетов и преступников с помощью Тетради Смерти. Вскоре, в интернете и СМИ появляются новости о таинственном "Кира", который пытается играть в бога.За расследование серии странных убийств, берется загадочный детектив L, который сделает все чтобы остановить Киру. Лайт старается сделать все, что от него зависит, ради того чтобы люди не раскрыли его личность, даже если это будет означать убийство невинных, которые могут помочь расследованию. '
};

var Content = /*#__PURE__*/function () {
  function Content() {
    _classCallCheck(this, Content);
  }

  _createClass(Content, null, [{
    key: "getData",
    value: function getData(req) {
      return fetch("https://anime-sitee-default-rtdb.firebaseio.com/".concat(req, ".json"), {
        method: 'GET',
        headers: {
          'Content-Type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(validData);
    }
  }, {
    key: "getAnime",
    value: function getAnime(id) {
      return fetch("https://anime-sitee-default-rtdb.firebaseio.com/animes/".concat(id, ".json"), {
        method: 'GET',
        headers: {
          'Content-Type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "setAnime",
    value: function setAnime(data, req) {
      return fetch("https://anime-sitee-default-rtdb.firebaseio.com/".concat(req, ".json"), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'aplication/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (body) {
        return console.log(body);
      });
    }
  }]);

  return Content;
}();

exports.Content = Content;

function validData(data) {
  return data ? Object.keys(data).map(function (el) {
    return _objectSpread(_objectSpread({}, data[el]), {}, {
      id: el
    });
  }) : [];
} // Content.setAnime(an, 'animes')
// Неиспользуемые ф-ии


function timeConverter(timestamp) {
  var a = new Date(timestamp * 1);
  var months = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = {
    year: year,
    month: month,
    date: date,
    hour: hour,
    min: min,
    sec: sec,

    get getDate() {
      return "".concat(this.date, " ").concat(this.month);
    }

  };
  return time;
}

function createValidObj(data) {
  var obj = {};
  data.forEach(function (el) {
    var fild = el.id;

    for (var key in data) {
      if (data[key].id == fild) {
        obj[fild] = Object.keys(el).filter(function (i) {
          return i !== 'id';
        }).map(function (item) {
          return el[item];
        }).join('');
      }
    }
  });
  return obj;
}
},{}],"src/scripts/goods.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goods = goods;

var _content = require("./content");

function goods() {
  var hash = window.location.hash.substring(1);
  var wrapper = document.querySelector('.anime-info');
  if (!wrapper) return;

  _content.Content.getAnime(hash).then(function (res) {
    wrapper.innerHTML = _allInfoPage(res);
    return res;
  });
}

function _allInfoPage(data) {
  var title = data.title,
      views = data.views,
      year = data.year,
      genres = data.genres,
      type = data.type,
      img = data.img,
      desc = data.desc,
      ageRating = data.ageRating,
      series = data.series;
  var genresValid = !genres ? '' : genres.filter(function (item) {
    return item !== null;
  }).map(function (el) {
    return "<li><a href=''>".concat(el, "</a></li>");
  });
  return "\n  <ul class=\"anime-info__main\">\n    <h1 class=\"anime-info__title\">".concat(title, "</h1>\n    <li class=\"anime-info__views\"><b>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u043E\u0432</b>: ").concat(views || 'Неизвестно', "</li>\n    <li class=\"anime-info__year\"><b>\u0413\u043E\u0434</b>: ").concat(year, "</li>\n    <li class=\"anime-info__age\"><b>\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433</b>: ").concat(ageRating || '', "</li>\n    <li><b class='anime-info__genres-title'>\u0416\u0430\u043D\u0440:</b><ul class='anime-info__genres'>").concat(genresValid, "</ul></li>\n    <li class=\"anime-info__type\"><b>\u0422\u0438\u043F</b>: ").concat(type, "</li>\n    <li class=\"anime-info__serias\"><b>\u0421\u0435\u0440\u0438\u0439</b>: ").concat(series, "</li>\n  </ul>\n  <div class=\"anime-info__img\">\n    <img class=\"anime-info__picture\" src=\"").concat(img, "\" alt=\"\">\n  </div>\n    <p class=\"anime-info__desc\">").concat(desc || '', "</p>\n  </div>\n  ");
}
},{"./content":"src/scripts/content.js"}],"src/scripts/navbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showNavbar;

function showNavbar() {
  var navbar = document.querySelector('.header__nav');
  window.addEventListener('scroll', changeNavbar);

  function changeNavbar() {
    if (navbar.getBoundingClientRect().bottom < 0) {
      navbar.classList.add('fixed-show');
      addAnim(navbar);
    }

    if (pageYOffset < 210) {
      navbar.classList.remove('fixed-show', 'anim-navbar');
    }
  }

  function addAnim(el) {
    setTimeout(function () {
      el.classList.add('anim-navbar');
    }, 100);
  }

  changeNavbar();
}
},{}],"src/scripts/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToWebList = addToWebList;

var _content = require("./content");

var _navbar = _interopRequireDefault(require("./navbar"));

var _goods = require("./goods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toHTMLbasicItem(data) {
  var genres = !data.genres ? '' : data.genres.filter(function (item) {
    return item !== null;
  }).map(function (el) {
    return "<li>".concat(el, "</li>");
  });
  var hideInfo = !(data.type && data.series && data.year) ? 'style="display:none"' : '';
  var hideGenres = !(genres && data.update) ? 'style="display:none"' : '';
  return "\n      <li class=\"basic__item basic-item\" data-id = ".concat(data.id, " >\n        <a href=\"anime.html#").concat(data.id, "\" class=\"basic-item__link\">\n          <span class=\"basic-item__date\">13 \u043C\u0430\u044F</span>\n          <img\n            src=").concat(data.img || '/', "\n            class=\"basic-item__image\"\n            alt=\"\"\n          />\n          <div class=\"basic-item__desc\">\n            <span class=\"basic-item__title\">\n              ").concat(data.title, " \n            </span>\n            <span class='basic-item__separ'>").concat(genres ? '-' : '', "</span>\n            <ul ").concat(hideGenres, " class='basic-item__genres'>").concat(genres, "</ul>\n            <span ").concat(hideInfo, ">\n              \u0422\u0438\u043F: ").concat(data.type, " | \u0421\u0435\u0440\u0438\u0439: ").concat(data.series, " | ").concat(data.year, "\n            </span>\n          </div>\n        </a>\n      </li>\n  ");
}

function _toHTMLAnimeCard(data) {
  var genres = !data.genres ? '' : data.genres.filter(function (item) {
    return item !== null;
  }).map(function (el) {
    return "<li><a href=''>".concat(el, "</a></li>");
  });
  return "\n    <article class=\"new-anime__item\">\n      <a href=\"anime.html#".concat(data.id, "\">\n        <img\n        class=\"new-anime__img\"\n        src=\"").concat(data.img, "\"\n        alt=\"\"\n        />\n      </a>\n      <div class=\"new-anime__desc\">\n        <a href=\"anime.html#").concat(data.id, "\" class=\"new-anime__title\"\n          >").concat(data.title, "</a\n        >\n        <ul class=\"new-anime__info\">\n          <li class=\"new-anime__series\">").concat(data.year, " | ").concat(data.type, " | \u0421\u0435\u0440\u0438\u0439: ").concat(data.series, "</li>\n          <li>\n            <b class='new-anime__genre-title'>\u0416\u0430\u043D\u0440\u044B:</b>\n            <ul class=\"new-anime__genres\">\n              ").concat(genres, "\n            </ul>\n          </li>\n          <li class=\"new-anime__age\">\n            <b>\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433:</b> ").concat(data.ageRating, "\n          </li>\n        </ul>\n      </div>\n    </article>\n  ");
}

function _toHTMLSliderItem(data) {
  return "\n    <div class=\"my-slider__item\">\n      <a href=\"anime.html#".concat(data.id, "\">\n        <img class=\"my-slider__img\" src=\"").concat(data.img, "\" alt=\"").concat(data.title, "\"/>\n        <span class=\"my-slider__label\">").concat(data.title, "</span>\n      </a>\n    </div>\n  ");
}

function addToWebList(sel, req, html) {
  if (!sel) return;

  _content.Content.getData(req).then(function (el) {
    el.forEach(function (item) {
      sel.insertAdjacentHTML('afterbegin', html(item));
    });
  });
}

window.addEventListener('load', function () {
  (0, _navbar.default)();
  (0, _goods.goods)();
  addToWebList(document.querySelector('.basic__list'), 'animes', _toHTMLbasicItem);
  addToWebList(document.querySelector('.basic__news-list'), 'anime-news', _toHTMLbasicItem);
  addToWebList(document.querySelector('.basic__preview-list'), 'anime-adt', _toHTMLbasicItem);
  addToWebList(document.querySelector('.new-anime__container'), 'animes', _toHTMLAnimeCard);
  addToWebList(document.querySelector('.my-slider__visible'), 'animes', _toHTMLSliderItem);
});
},{"./content":"src/scripts/content.js","./navbar":"src/scripts/navbar.js","./goods":"src/scripts/goods.js"}],"src/scripts/plugins/Select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Select = /*#__PURE__*/function () {
  function Select(sel, data) {
    _classCallCheck(this, Select);

    this.sel = sel;
    this.data = data;
    this.init();
    this.visualSelect();
    this.resizeSelect();
    this.addOption();
    this._height = this.resizeSelect();
    this._labels = [];
    this._searchResults = this.data.options;
    this.searchSelect();
    this.closeAllSelect();
  }

  _createClass(Select, [{
    key: "init",
    value: function init() {
      console.log(this._searchResults);
      this.sel.insertAdjacentHTML('beforeend', this._toHTML(this.data));
    }
  }, {
    key: "resizeSelect",
    value: function resizeSelect() {
      var list = this.sel.querySelector('.select__main');
      var placeholder = this.sel.querySelector('.select__placeholder');
      this.sel.style.height = placeholder.offsetHeight / 14 + 'em';
      list.style.height = placeholder.offsetHeight / 14 + 'em';
      return placeholder.offsetHeight / 14;
    }
  }, {
    key: "visualSelect",
    value: function visualSelect() {
      var placeholder = this.sel.querySelector('.select__placeholder');
      var close = this.sel.querySelector('.select__close');
      placeholder.addEventListener('click', this.toggleSelect.bind(this));
      close.addEventListener('click', this.toggleSelect.bind(this));
    }
  }, {
    key: "openSelect",
    value: function openSelect() {
      var list = this.sel.querySelector('.select__main');
      var close = this.sel.querySelector('.select__close');
      close.classList.add('anim');
      list.style.height = 'auto';
      list.style.zIndex = '999';
      list.setAttribute('data-open', 1);
    }
  }, {
    key: "closeSelect",
    value: function closeSelect() {
      var list = this.sel.querySelector(".select__main");
      var close = this.sel.querySelector(".select__close");
      list.style.height = this._height + 'em';
      close.classList.remove('anim');
      list.setAttribute('data-open', 0);
    }
  }, {
    key: "toggleSelect",
    value: function toggleSelect() {
      var list = this.sel.querySelector('.select__main');
      var isOpenEl = +list.getAttribute('data-open');
      if (isOpenEl) this.closeSelect();else this.openSelect();
    }
  }, {
    key: "closeAllSelect",
    value: function closeAllSelect() {
      var _this = this;

      document.addEventListener('click', function (e) {
        if (!_this.sel.contains(e.target)) {
          var select = _this.sel.querySelector('.select__main');

          select.style.height = _this._height + 'em';
          select.style.zIndex = 'auto';
          select.setAttribute('data-open', false);
        }
      });
    }
  }, {
    key: "addOption",
    value: function addOption() {
      var _this2 = this;

      var list = this.sel.querySelector('.select__list');
      list.addEventListener('click', function (e) {
        var label = e.target.dataset.label;
        if (label && e.target.classList.contains('disable')) return;
        e.target.classList.add('disable');
        console.log(label);

        _this2.drawLabel(label);
      });
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(label) {
      var placeholder = this.sel.querySelector('.select__placeholder');
      var multiSelect = this.data.multiSelect;

      if (!multiSelect) {
        placeholder.innerHTML = label;
        this.enableOption(label, true);
        this.closeSelect();
        return;
      }

      this._labels.push(label);

      this._labels = this._labels.filter(function (el) {
        return el;
      });
      placeholder.innerHTML = this.listLabel(this._labels);
      this._height = placeholder.offsetHeight / 14 - 0.4;
      this.sel.style.height = this._height + 'em';
      this.closeSelect();
      this.removeLabel();
    }
  }, {
    key: "removeLabel",
    value: function removeLabel() {
      var _this3 = this;

      var placeholder = this.sel.querySelector('.select__placeholder');

      if (!this._labels.length) {
        placeholder.innerHTML = this.data.placeholder;
        this._height = this.resizeSelect();
      }

      placeholder.addEventListener('click', function (e) {
        var label = e.target.dataset.label;

        if (_this3._labels.includes(label)) {
          var inx = _this3._labels.indexOf(label);

          _this3._labels.splice(inx, 1);

          _this3.drawLabel();

          _this3.enableOption(label);
        }
      });
    }
  }, {
    key: "enableOption",
    value: function enableOption(label) {
      var multi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var list = this.sel.querySelectorAll('.select__option');
      list.forEach(function (element) {
        if (multi && element.dataset.label !== label) element.classList.remove('disable');
        if (element.dataset.label === label && !multi) element.classList.remove('disable');
      });
    }
  }, {
    key: "searchSelect",
    value: function searchSelect() {
      var search = this.data.search;
      if (!search) return;
      var searchInput = this.sel.querySelector('.select__search');
      searchInput.addEventListener('input', this.searchOptions.bind(this));
    }
  }, {
    key: "searchOptions",
    value: function searchOptions(e) {
      var result = [];
      var inputValue = e.target.value.toLowerCase();

      this._searchResults.forEach(function (el) {
        var optionTitle = el.title.toLowerCase();

        if (optionTitle.indexOf(inputValue) >= 0) {
          result.push(el);
        }
      });

      this.drawSearchResult(result);
    }
  }, {
    key: "drawSearchResult",
    value: function drawSearchResult() {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var listOptions = this.sel.querySelector('.select__list');
      listOptions.innerHTML = this.listOption(result);
    }
  }, {
    key: "listLabel",
    value: function listLabel(arr) {
      return arr.map(function (el) {
        return "<span class='select__label'>".concat(el, " <i data-label=").concat(el, ">&times;</i></span>");
      }).join('');
    }
  }, {
    key: "listOption",
    value: function listOption(arr) {
      return arr.map(function (el) {
        return "<li class='select__option' data-label=".concat(el.title, ">").concat(el.title, "</li>");
      }).join('') || "<li class='select__option disable' >\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</li>";
    }
  }, {
    key: "_toHTML",
    value: function _toHTML(data) {
      var options = data.options,
          search = data.search,
          placeholder = data.placeholder,
          multiSelect = data.multiSelect;
      var searchEl = search ? "<input class='select__search' type='text'/>" : '';
      var charClose = multiSelect ? "<span class='select__close'>&times;</span>" : "<i class=\"select__close select__arrow\"></i>";
      var allOptions = options ? options.map(function (el) {
        return "<li class='select__option' data-label=".concat(el.title, ">").concat(el.title, "</li>");
      }).join('') : '';
      return "\n      <div class='select' >\n        <div class='select__main' data-open=0>\n          ".concat(charClose, "\n          <span class='select__placeholder' data-select='1'>").concat(placeholder || '', "</span>\n          <div>\n            ").concat(searchEl, "\n            <ul class='select__list'>\n              ").concat(allOptions, "\n            </ul>\n          </div>\n        </div>\n      </div>\n    ");
    }
  }]);

  return Select;
}(); // new Select(document.querySelector('.select-wrapper'), {
//   multiSelect: true,
//   search: true,
//   placeholder: 'По каким жанрам искать?',
//   options: [
//     {
//       title: 'Приключение',
//     },
//     {
//       title: 'Ниндзя',
//     },
//     {
//       title: 'Якудза',
//     },
//     {
//       title: 'Военная-тематика',
//     },
//     {
//       title: 'Безумие',
//     },
//     {
//       title: 'Вампиры',
//     },
//   ],
// })
// new Select(document.querySelector('.select-wrapper2'), {
//   multiSelect: true,
//   search: true,
//   placeholder: 'По каким жанрам искать?',
//   options: [
//     {
//       title: 'Приключение',
//     },
//     {
//       title: 'Ниндзя',
//     },
//     {
//       title: 'Якудза',
//     },
//     {
//       title: 'Военная-тематика',
//     },
//     {
//       title: 'Безумие',
//     },
//     {
//       title: 'Вампиры',
//     },
//   ],
// })


exports.default = Select;
},{}],"src/scripts/plugins/Slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : data,
        _ref$slideTo = _ref.slideTo,
        slideTo = _ref$slideTo === void 0 ? 0 : _ref$slideTo;

    _classCallCheck(this, Slider);

    this.slideTo = slideTo;
    this.data = data;
    this.movingSlide();
    this.moving = 0;
    this.count = 0;
    this.setItems();
  }

  _createClass(Slider, [{
    key: "widthSliderItem",
    get: function get() {
      var sel = this.data.sel;
      var sliderItem = sel.querySelector('.my-slider__item');
      if (!sliderItem) return;
      return sliderItem.offsetWidth;
    }
  }, {
    key: "visibleItems",
    get: function get() {
      var items = this.data.items;
      return this.widthSliderItem * items;
    }
  }, {
    key: "setItems",
    value: function setItems() {
      var sel = this.data.sel;
      sel.style.width = this.visibleItems + 'px';
    }
  }, {
    key: "allWidthSlider",
    get: function get() {
      var sel = this.data.sel;
      var sliderItem = sel.querySelectorAll('.my-slider__item');
      if (!sliderItem) return;
      return sliderItem.length;
    }
  }, {
    key: "visible",
    get: function get() {
      var sel = this.data.sel;
      var visibleItems = sel.querySelector('.my-slider__visible');
      if (!visibleItems) return;
      return visibleItems.offsetWidth / this.widthSliderItem;
    }
  }, {
    key: "moveRightSlide",
    value: function moveRightSlide() {
      var sel = this.data.sel;
      var sliderVisible = sel.querySelector('.my-slider__visible');
      console.log(this.slideTo);
      if (!sliderVisible) return;
      if (!this.slideTo) this.count++;else this.count = this.count + this.slideTo;
      if (this.count > this.allWidthSlider - this.visible) this.count = 0;

      if (this.count <= this.allWidthSlider) {
        sliderVisible.style.transform = "translateX(-".concat(this.count * this.widthSliderItem, "px)");
      }
    }
  }, {
    key: "moveLeftSlide",
    value: function moveLeftSlide() {
      var sel = this.data.sel;
      var sliderVisible = sel.querySelector('.my-slider__visible');
      if (!sliderVisible) return;
      if (!this.slideTo) this.count--;else this.count = this.count - this.slideTo;

      if (this.count < 0) {
        this.count = this.allWidthSlider - this.visible;
      }

      sliderVisible.style.transform = "translateX(-".concat(this.count * this.widthSliderItem, "px)");
    }
  }, {
    key: "movingSlide",
    value: function movingSlide() {
      var sel = this.data.sel;
      var arrowRight = sel.querySelector('.my-slider__arrow-right');
      var arrowLeft = sel.querySelector('.my-slider__arrow-left');
      if (!arrowRight || !arrowLeft) return;
      arrowLeft.addEventListener('click', this.moveLeftSlide.bind(this));
      arrowRight.addEventListener('click', this.moveRightSlide.bind(this));
    }
  }]);

  return Slider;
}();

exports.default = Slider;
},{}],"src/scripts/app.js":[function(require,module,exports) {
"use strict";

var _content = require("./content");

var _goods = require("./goods");

var _render = require("./render");

var _Select = _interopRequireDefault(require("./plugins/Select"));

var _navbar = _interopRequireDefault(require("./navbar"));

var _Slider = _interopRequireDefault(require("./plugins/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderFilterSelect() {
  var selectGenresAdd = document.querySelector('.filter__genres-add');
  var selectType = document.querySelector('.filter__type');
  var selectStatus = document.querySelector('.filter__status');
  var selectAgeRating = document.querySelector('.filter__age-rating');
  var selectSort = document.querySelector('.filter__sort');
  if (!selectGenresAdd || !selectType || !selectStatus || !selectAgeRating || !selectSort) return;
  var genres = [{
    title: 'Приключение'
  }, {
    title: 'Ниндзя'
  }, {
    title: 'Якудза'
  }, {
    title: 'Военная-тематика'
  }, {
    title: 'Безумие'
  }, {
    title: 'Вампиры'
  }];
  var animeType = [{
    title: 'Сериал'
  }, {
    title: 'Полнометражный фильм'
  }, {
    title: 'Короткометражный фильм'
  }, {
    title: 'OVA'
  }, {
    title: 'Special'
  }, {
    title: 'ONA'
  }];
  var animeStatus = [{
    title: 'Не-учитывай'
  }, {
    title: 'Вышел'
  }, {
    title: 'Онгоинг'
  }, {
    title: 'Анонс'
  }];
  var ageRating = [{
    title: 'G(для всех возрастов)'
  }, {
    title: 'PG(для детей)'
  }, {
    title: 'PR-13(от 13 лет)'
  }, {
    title: 'R-17+(насилие и/или частичная нагота)'
  }, {
    title: 'R+(частичная нагота)'
  }];
  var sortList = [{
    title: 'Название(А-Я)'
  }, {
    title: 'Дате выхода'
  }, {
    title: 'Рейтингу'
  }, {
    title: 'Голосам'
  }, {
    title: 'Просмотрам'
  }];
  new _Select.default(selectGenresAdd, {
    multiSelect: true,
    search: true,
    placeholder: 'По каким жанрам искать?',
    options: genres
  });
  new _Select.default(selectType, {
    multiSelect: true,
    search: true,
    placeholder: 'Какой тип аниме искать?',
    options: animeType
  });
  new _Select.default(selectStatus, {
    multiSelect: false,
    search: false,
    placeholder: 'Статус аниме',
    options: animeStatus
  });
  new _Select.default(selectAgeRating, {
    multiSelect: false,
    search: false,
    placeholder: 'По какому рейтингу искать? ',
    options: ageRating
  });
  new _Select.default(selectSort, {
    multiSelect: false,
    search: false,
    placeholder: 'Ка сортировать?',
    options: sortList
  });
  toggleFilter();
}

function toggleFilter() {
  var filterHeaderBtn = document.querySelector('.header__filter');
  var filter = document.querySelector('.filter');
  var closeFilter = filter.querySelector('.filter__close');
  if (!filterHeaderBtn) return;
  filterHeaderBtn.addEventListener('click', function () {
    filter.classList.toggle('show-filter');
  });
  closeFilter.addEventListener('click', function () {
    filter.classList.remove('show-filter');
  });
}

function renderSlider() {
  var basicSlider = document.querySelector('.basic__slider');
  new _Slider.default({
    sel: basicSlider,
    items: 2,
    slideTo: 2
  });
}

renderFilterSelect();
renderSlider();
},{"./content":"src/scripts/content.js","./goods":"src/scripts/goods.js","./render":"src/scripts/render.js","./plugins/Select":"src/scripts/plugins/Select.js","./navbar":"src/scripts/navbar.js","./plugins/Slider":"src/scripts/plugins/Slider.js"}],"C:/Users/maaxk/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51982" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/maaxk/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/scripts/app.js"], null)
//# sourceMappingURL=/app.5bd27738.js.map