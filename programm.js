let inputRub = document.getElementById('Rub'),
    inputUsd = document.getElementById('Usd'),
    inputEur = document.getElementById('Eur'),
    inputByn = document.getElementById('Byn'),
    inputUan = document.getElementById('Uan'),
    inputPln = document.getElementById('Pln'),
    value = document.querySelector('[value]'),
    btn = document.querySelector('.disco');

    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataRusd = JSON.parse(request.response),
                    dataReur = JSON.parse(request.response),
                    dataRbyn = JSON.parse(request.response);
                    dataRuan = JSON.parse(request.response);
                    dataRpln = JSON.parse(request.response);
                inputUsd.value = inputRub.value / dataRusd.Rusd;
                inputEur.value = inputRub.value / dataReur.Reur;
                inputByn.value = inputRub.value / dataRbyn.Rbyn;
                inputUan.value = inputRub.value / dataRuan.Ruan;
                inputPln.value = inputRub.value / dataRpln.Rpln;
            } 
        });

    }) 

    inputUsd.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataUrub = JSON.parse(request.response),
                    dataUeur = JSON.parse(request.response),
                    dataUbyn = JSON.parse(request.response);
                    dataUuan = JSON.parse(request.response);
                    dataUpln = JSON.parse(request.response);
                inputRub.value = inputUsd.value * dataUrub.Urub;
                inputEur.value = inputUsd.value * dataUeur.Ueur;
                inputByn.value = inputUsd.value * dataUbyn.Ubyn;
                inputUan.value = inputUsd.value * dataUuan.Uuan;
                inputPln.value = inputUsd.value * dataUpln.Upln;
            } 
        });

    }) 
    

    inputEur.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataEusd = JSON.parse(request.response),
                    dataErub = JSON.parse(request.response),
                    dataEbyn = JSON.parse(request.response);
                    dataEuan = JSON.parse(request.response);
                    dataEpln = JSON.parse(request.response);
                inputUsd.value = inputEur.value / dataEusd.Eusd;
                inputRub.value = inputEur.value * dataErub.Erub;
                inputByn.value = inputEur.value * dataEbyn.Ebyn;
                inputUan.value = inputEur.value * dataEuan.Euan;
                inputPln.value = inputEur.value * dataEpln.Epln;
            } 
        });

    }) 


    inputByn.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataBusd = JSON.parse(request.response),
                    dataBeur = JSON.parse(request.response),
                    dataBrub = JSON.parse(request.response);
                    dataBuan = JSON.parse(request.response);
                    dataBpln = JSON.parse(request.response);
                inputUsd.value = inputByn.value / dataBusd.Busd;
                inputEur.value = inputByn.value / dataBeur.Beur;
                inputRub.value = inputByn.value * dataBrub.Brub;
                inputUan.value = inputByn.value * dataBuan.Buan;
                inputPln.value = inputByn.value * dataBpln.Bpln;
            } 
        });

    })
    

    inputUan.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataUausd = JSON.parse(request.response),
                    dataUaeur = JSON.parse(request.response),
                    dataUabyn = JSON.parse(request.response);
                    dataUarub = JSON.parse(request.response);
                    dataUapln = JSON.parse(request.response);
                inputUsd.value = inputUan.value / dataUausd.Uausd;
                inputEur.value = inputUan.value / dataUaeur.Uaeur;
                inputByn.value = inputUan.value / dataUabyn.Uabyn;
                inputRub.value = inputUan.value * dataUarub.Uarub;
                inputPln.value = inputUan.value * dataUapln.Uapln;
            } 
        });

    }) 


    inputPln.addEventListener('input', () => {
        let request = new XMLHttpRequest;
        
        request.open('GET', 'programm.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        
        //status
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function(){
            if ( request.readyState === 4 && request.status == 200 ) {
                let dataPusd = JSON.parse(request.response),
                    dataPeur = JSON.parse(request.response),
                    dataPbyn = JSON.parse(request.response);
                    dataPuan = JSON.parse(request.response);
                    dataPrub = JSON.parse(request.response);
                inputUsd.value = inputPln.value / dataPusd.Pusd;
                inputEur.value = inputPln.value / dataPeur.Peur;
                inputByn.value = inputPln.value / dataPbyn.Pbyn;
                inputUan.value = inputPln.value * dataPuan.Puan;
                inputRub.value = inputPln.value * dataPrub.Prub;
            } 
        });
        
    }) 
    timerID = setInterval( check , 500 )
    function check() {
        btn.classList.toggle('toggle');
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        location.reload();
    })

