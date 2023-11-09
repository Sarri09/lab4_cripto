// ==UserScript==
// @name         Paso 1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  AAAAAAAAAAAAAAA
// @author       Sarri09
// @match        https://cripto.tiiny.site/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function obtenerMayusculasYMostrarLlave() {
        var textoPagina = document.body.textContent;
        var mayusculas = textoPagina.match(/[A-Z]/g);
        var llave = mayusculas.join('');

        console.log('La llave es: ' + llave);
    }

    window.addEventListener('load', obtenerMayusculasYMostrarLlave);
})();
