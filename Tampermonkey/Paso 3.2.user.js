// ==UserScript==
// @name         Paso 3.2
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

    function reemplazarParrafos() {
        var mensaje = "Sin el conocimiento de información secreta, el criptoanálisis se dedica al estudio de sistemas criptográficos con el fin de encontrar debilidades en los sistemas y romper su seguridad. El criptoanálisis es un componente importante del proceso de creación de criptosistemas sólidos. Gracias al criptoanálisis, podemos comprender los criptosistemas y mejorarlos identificando los puntos débiles. Un criptoanalista puede ayudarnos a trabajar en el algoritmo para crear un código secreto más seguro y protegido. El resultado del criptoanálisis es la protección de la información crítica para que no sea interceptada, copiada, modificada o eliminada. Otras tareas de las que pueden ser responsables los criptoanalistas incluyen evaluar, analizar y localizar las debilidades en los sistemas y algoritmos de seguridad criptográfica.Sin el conocimiento de información secreta, el criptoanálisis se dedica al estudio de sistemas criptográficos con el fin de encontrar debilidades en los sistemas y romper su seguridad. El criptoanálisis es un componente importante del proceso de creación de criptosistemas sólidos. Gracias al criptoanálisis, podemos comprender los criptosistemas y mejorarlos identificando los puntos débiles. Un criptoanalista puede ayudarnos a trabajar en el algoritmo para crear un código secreto más seguro y protegido. El resultado del criptoanálisis es la protección de la información crítica para que no sea interceptada, copiada, modificada o eliminada. Otras tareas de las que pueden ser responsables los criptoanalistas incluyen evaluar, analizar y localizar las debilidades en los sistemas y algoritmos de seguridad criptográfica.Sin el conocimiento de información secreta, el criptoanálisis se dedica al estudio de sistemas criptográficos con el fin de encontrar debilidades en los sistemas y romper su seguridad. El criptoanálisis es un componente importante del proceso de creación de criptosistemas sólidos. Gracias al criptoanálisis, podemos comprender los criptosistemas y mejorarlos identificando los puntos débiles. Un criptoanalista puede ayudarnos a trabajar en el algoritmo para crear un código secreto más seguro y protegido. El resultado del criptoanálisis es la protección de la información crítica para que no sea interceptada, copiada, modificada o eliminada. Otras tareas de las que pueden ser responsables los criptoanalistas incluyen evaluar, analizar y localizar las debilidades en los sistemas y algoritmos de seguridad criptográfica.Sin el conocimiento de información secreta, el criptoanálisis se dedica al estudio de sistemas criptográficos con el fin de encontrar debilidades en los sistemas y romper su seguridad. El criptoanálisis es un componente importante del proceso de creación de criptosistemas sólidos. Gracias al criptoanálisis, podemos comprender los criptosistemas y mejorarlos identificando los puntos débiles. Un criptoanalista puede ayudarnos a trabajar en el algoritmo para crear un código secreto más seguro y protegido. El resultado del criptoanálisis es la protección de la información crítica para que no sea interceptada, copiada, modificada o eliminada. Otras tareas de las que pueden ser responsables los criptoanalistas incluyen evaluar, analizar y localizar las debilidades en los sistemas y algoritmos de seguridad criptográfica.";

        var parrafos = document.querySelectorAll('p');

        parrafos.forEach(function(parrafo) {
            parrafo.textContent = mensaje;
        });

    }

    function crearNuevoDiv() {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'M7';
        nuevoDiv.id = 'MKkY8k6atHc';

        document.body.appendChild(nuevoDiv);
    }

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
        var mensajesCifrados = document.querySelectorAll('.M1, .M2, .M3, .M4, .M5, .M6, .M7');
        console.log('Los mensajes cifrados son: ' + mensajesCifrados.length);
    }

    function decodificarMensajes(llave) {
        var mensajesCifrados = document.querySelectorAll('.M1, .M2, .M3, .M4, .M5, .M6, .M7');

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
    window.addEventListener('load', crearNuevoDiv);
    window.addEventListener('load', obtenerMayusculasYMostrarLlave);
    window.addEventListener('load', reemplazarParrafos);
})();
