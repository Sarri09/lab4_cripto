// ==UserScript==
// @name         Paso 3.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  AAAAAAAAAAAAAAA
// @author       Sarri09
// @match        https://cripto.tiiny.site/
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js#sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==
// ==/UserScript==

(function() {
    'use strict';

    function obtenerMayusculasYMostrarLlave() {
        var textoPagina = document.body.textContent;
        var mayusculas = textoPagina.match(/[A-Z]/g);

        if (mayusculas) {
            var llave = mayusculas.join('');
            console.log('La llave es: ' + llave);

            buscarMensajesCifrados();
            decodificarMensajes(llave);
        }
    }

    function buscarMensajesCifrados() {
        var mensajesCifrados = document.querySelectorAll('.M1, .M2, .M3, .M4, .M5, .M6');
        console.log('Los mensajes cifrados son: ' + mensajesCifrados.length);
    }

    function decodificarMensajes(llave) {
        var mensajesCifrados = document.querySelectorAll('.M1, .M2, .M3, .M4, .M5, .M6');

        mensajesCifrados.forEach(function(mensaje) {
            var textoCifradoBase64 = mensaje.id;
            var clave = CryptoJS.enc.Utf8.parse(llave);

            var mensajeDescifradoBase64 = CryptoJS.TripleDES.decrypt(
                {
                    ciphertext: CryptoJS.enc.Base64.parse(textoCifradoBase64)
                },
                clave,
                {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }
            );

            var mensajeDescifradoTexto = mensajeDescifradoBase64.toString(CryptoJS.enc.Utf8);
            var elementoMensajeDescifrado = document.createElement('div');
            elementoMensajeDescifrado.textContent = mensajeDescifradoTexto;

            mensaje.parentNode.appendChild(elementoMensajeDescifrado);

            console.log(textoCifradoBase64 + ' ' + mensajeDescifradoTexto);
        });
    }

    window.addEventListener('load', obtenerMayusculasYMostrarLlave);
})();
