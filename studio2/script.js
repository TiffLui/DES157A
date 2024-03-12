(function(){
    'use strict';
    console.log('reading JS');

    const overlayDragonite = document.getElementById('overlay-dragonite');
    const overlayFlareon = document.getElementById('overlay-flareon');
    const overlayGlaceon = document.getElementById('overlay-glaceon');
    const overlayGroudon = document.getElementById('overlay-groudon');
    const overlayJolteon = document.getElementById('overlay-jolteon');
    const overlayLeafeon = document.getElementById('overlay-leafeon');
    

    const closeBtnDragonite = document.querySelector('#overlay-dragonite');
    const closeBtnFlareon = document.querySelector('#overlay-flareon');
    const closeBtnGlaceon = document.querySelector('#overlay-glaceon');
    const closeBtnGroudon = document.querySelector('#overlay-groudon');
    const closeBtnJolteon = document.querySelector('#overlay-jolteon');
    const closeBtnLeafeon = document.querySelector('#overlay-leafeon');

    document.getElementById('dragonite-b').addEventListener('click', function() {
        overlayDragonite.style.display = 'block';
    });
    document.getElementById('flareon-b').addEventListener('click', function() {
        overlayFlareon.style.display = 'block';
    });
    document.getElementById('glaceon-b').addEventListener('click', function() {
        overlayGlaceon.style.display = 'block';
    });
    document.getElementById('groudon-b').addEventListener('click', function() {
        overlayGroudon.style.display = 'block';
    });
    document.getElementById('jolteon-b').addEventListener('click', function() {
        overlayJolteon.style.display = 'block';
    });
    document.getElementById('leafeon-b').addEventListener('click', function() {
        overlayLeafeon.style.display = 'block';
    });

    closeBtnDragonite.addEventListener('click', function() {
        overlayDragonite.style.display = 'none';
    });
    closeBtnFlareon.addEventListener('click', function() {
        overlayFlareon.style.display = 'none';
    });
    closeBtnGlaceon.addEventListener('click', function() {
        overlayGlaceon.style.display = 'none';
    });
    closeBtnGroudon.addEventListener('click', function() {
        overlayGroudon.style.display = 'none';
    });
    closeBtnJolteon.addEventListener('click', function() {
        overlayJolteon.style.display = 'none';
    });
    closeBtnLeafeon.addEventListener('click', function() {
        overlayLeafeon.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == overlayDragonite || event.target == overlayFlareon || event.target == overlayGlaceon || event.target == overlayGroudon || event.target == overlayJolteon || event.target == overlayLeafeon) {
            overlayDragonite.style.display = 'none';
            overlayFlareon.style.display = 'none';
            overlayGlaceon.style.display = 'none';
            overlayGroudon.style.display = 'none';
            overlayJolteon.style.display = 'none';
            overlayLeafeon.style.display = 'none';
        }
    });
})();