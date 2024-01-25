(() => {
    console.log("holi")
    chrome.runtime.onMessage.addListener((obj, sender, response) => { 
        const { type } = obj;
        if (type == "NEW") { 
            console.log("Holi");
        }
        setTimeout(() => {
            let sum = 0.0
            var elementos = document.querySelectorAll('.custom-card-container');
            // Convertir la NodeList a un array y revertirlo
            var elementosArray = Array.from(elementos).reverse();
            elementosArray.forEach(elemento => {
                var montoString = elemento.querySelectorAll('.colum-label[ng-bind-html="column.label"]')[1].nextElementSibling.textContent.trim()
                var montoDepurado = montoString.replace(/[$.]/g, "").replace(",", ".");
                var monto = parseFloat(montoDepurado)
                sum += monto;
                console.log(monto);
                const sumValue = document.createElement('p')
                sumValue.style.paddingLeft = '8px';  // Ajusta el valor según tus necesidades
                sumValue.style.paddingRight = '8px';
                sumValue.style.color = '#004680';
                var moneda = sum.toLocaleString('es-AR', {
                                                                style: 'currency',
                                                                currency: 'ARS'
                                                                });
                sumValue.textContent = 'Suma: ' + moneda;
                var cont = elemento.querySelector('.col-lg-11.col-xs-10.pdr-0.ng-scope');
                cont.appendChild(sumValue)
            })
        },6000)
    })
})();