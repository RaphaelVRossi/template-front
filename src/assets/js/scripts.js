(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define('/charts/morris', ['jquery', 'Site'], factory);
    } else if (typeof exports !== "undefined") {
      factory(require('jquery'), require('Site'));
    } else {
      var mod = {
        exports: {}
      };
      factory(global.jQuery, global.Site);
      global.chartsMorris = mod.exports;
    }
  })(this, function (_jquery, _Site) {
    'use strict';
  
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery);
  
    (0, _jquery2.default)(document).ready(function ($$$1) {
      (0, _Site.run)();
    });
  
  
  
    // Example Morris Bar
    // ------------------
    (function () {
      Morris.Bar({
        element: 'graficoPorPDV',
        data: [{
          y: 'ABC',
          a: 5000,
        }, {
          y: 'SP1',
          a: 6700,
        }, {
          y: 'SP2',
          a: 3000,
        }, {
          y: 'SP3',
          a: 5000,
        }, {
          y: 'SP4',
          a: 1900,
        }, {
          y: 'SP5',
          a: 2100,
        }, {
          y: 'STO',
          a: 950,
        }, {
          y: 'RJ7',
          a: 250,
          // { y: '2013-10', a: 50, b: 40 },
          // { y: '2013-11', a: 75, b: 65 },
          // { y: '2013-12', a: 100, b: 90 }
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: [''],
        barGap: 6,
        barSizeRatio: 0.8,
        smooth: true,
        gridTextColor: '#474e54',
        gridLineColor: '#eef0f2',
        goalLineColors: '#e3e6ea',
        gridTextFamily: Config.get('fontFamily'),
        gridTextWeight: '200',
        numLines: 8,
        gridtextSize: 5,
        resize: true,
        barColors: [Config.colors("red", 500)]
      });
    })();
  
    (function () {
      Morris.Bar({
        element: 'graficoPorDia',
        data: [{
          y: '10/06',
          a: 4000,
        }, {
          y: '11/06',
          a: 2000,
        }, {
          y: '12/06',
          a: 3000,
        }, {
          y: '13/06',
          a: 4000,
        }, {
          y: '14/06',
          a: 3000,
        }, {
          y: '15/06',
          a: 5000,
        }, {
          y: '16/06',
          a: 7000,
        }, {
          y: '17/06',
          a: 4000,
          // { y: '2013-10', a: 50, b: 40 },
          // { y: '2013-11', a: 75, b: 65 },
          // { y: '2013-12', a: 100, b: 90 }
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: [''],
        barGap: 6,
        barSizeRatio: 0.8,
        smooth: true,
        gridTextColor: '#474e54',
        gridLineColor: '#eef0f2',
        goalLineColors: '#e3e6ea',
        gridTextFamily: Config.get('fontFamily'),
        gridTextWeight: '200',
        numLines: 8,
        gridtextSize: 5,
        resize: true,
        barColors: [Config.colors("blue", 500)]
      });
    })();
  
  });

  var unlock = function() {
            $(this).unbind("click");
            $(this).removeClass("btn-unlock");
            $(this).addClass("btn-lock");
            $(this).click(lock);
            var badgeStatus = $(this).closest('tr').children('td').children('span');
            badgeStatus.html("Ativo");
            badgeStatus.removeClass("badge-danger");
            badgeStatus.addClass("badge-primary");
            $(this).children('i').removeClass("wb-unlock");
            $(this).children('i').addClass("wb-lock");
            $(this).attr("data-original-title", "Bloquear");
            $(this).tooltip('hide');
            $(this).tooltip('show');
          }

          var lock = function() {
            $(this).unbind("click");
            $(this).removeClass("btn-lock");
            $(this).addClass("btn-unlock");
            $(this).click(unlock);

            var badgeStatus = $(this).closest('tr').children('td').children('span');
            badgeStatus.html("Bloqueado");
            badgeStatus.removeClass("badge-primary");
            badgeStatus.addClass("badge-danger");
            $(this).children('i').removeClass("wb-lock");
            $(this).children('i').addClass("wb-unlock");
            $(this).attr("data-original-title", "Desbloquear");
            $(this).tooltip('hide');
            $(this).tooltip('show');
            
          }
              
          $("a.btn-unlock").click(unlock);

          $("a.btn-lock").click(lock);