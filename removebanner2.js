  document.addEventListener("DOMContentLoaded", function() {
      // Encontrar todos os elementos com o atributo alt igual a "www.000webhost.com"
      var elementsToRemove = document.querySelectorAll('[alt="www.000webhost.com"]');

      // Iterar sobre os elementos encontrados e removê-los
      elementsToRemove.forEach(function(element) {
        element.remove();
      });
    });
