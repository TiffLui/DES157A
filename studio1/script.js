(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#btn1');
    const receiveBtn = document.querySelector('#btn2');
    const formTwo = document.querySelector('#form2');
    const formOne = document.querySelector('#form1');

    const myText = document.querySelector('#finalText');

    const noLetter = document.querySelector('#letterNo');
    const receiveP = document.querySelector('#name');
    const paraOne = document.querySelector('#para1');
    const paraTwo = document.querySelector('#para2');
    const paraThree = document.querySelector('#para3');
    const closings = document.querySelector('#sincerely');
    const closingN = document.querySelector('#closeName');

    nextBtn.addEventListener('click', function(event) {
        
        event.preventDefault();
        // event.stopPropagation();


        console.log('hi');
        formTwo.style.display = 'block';
        formOne.style.display = 'none';


    });



    receiveBtn.addEventListener('click', function(event) {
        event.preventDefault();

        formTwo.style.display = 'none';
        document.getElementById('output').style.display = 'block';

  
        //form 1
        const name1 = document.querySelector('#name1').value;
        const noun1 = document.querySelector('#noun1').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun2 = document.querySelector('#noun2').value;
        const building1 = document.querySelector('#building1').value;
        const adj2 = document.querySelector('#adj2').value;
        const pluralN = document.querySelector('#pluralN').value;
        const animal1 = document.querySelector('#animal1').value;
        const body1 = document.querySelector('#body1').value;
        const feeling1 = document.querySelector('#feeling1').value;
        //form 2
        const adj3 = document.querySelector('#adj3').value;
        const role = document.querySelector('#role').value;
        const commonN = document.querySelector('#commonN').value;
        const body2 = document.querySelector('#body2').value;
        const adj4 = document.querySelector('#adj4').value;
        const noun3 = document.querySelector('#noun3').value;
        const place = document.querySelector('#place').value;
        const adverb1 = document.querySelector('#adverb1').value;
        const verb1 = document.querySelector('#verb1').value;
        const name2 = document.querySelector('#name2').value;

        //form 1
        document.querySelector('#name1').value ='';
        document.querySelector('#noun1').value ='';
        document.querySelector('#adj1').value ='';
        document.querySelector('#noun2').value ='';
        document.querySelector('#building1').value ='';
        document.querySelector('#adj2').value ='';
        document.querySelector('#pluralN').value ='';
        document.querySelector('#animal1').value ='';
        document.querySelector('#body1').value ='';
        document.querySelector('#feeling1').value ='';
        //form 2
        document.querySelector('#adj3').value ='';
        document.querySelector('#role').value ='';
        document.querySelector('#commonN').value ='';
        document.querySelector('#adj4').value ='';
        document.querySelector('#noun3').value ='';
        document.querySelector('#place').value ='';
        document.querySelector('#adverb1').value ='';
        document.querySelector('#verb1').value ='';
        document.querySelector('#name2').value ='';

        //Replacing text
        noLetter.innerHTML= 'Letter No. 222';
        receiveP.innerHTML = `My Dearest <u>${name1}</u>,`;
        paraOne.innerHTML = `As the <u>${noun1}</u> sets upon the horizon, casting a ${adj1} glow upon my <u>${noun2}</u>, I find comfort in the <u>${building1}</u> of your love. Your <u>${adj2}</u> laughter echoes in the <u>${pluralN}</u> of my soul, and the melody of your voice is the sweetest <u>${animal1}</u>'s song.`;
        paraTwo.innerHTML= `With quill in <u>${body1}</u> and ink of <u>${feeling1}</u>, I write this letter to declare my <u>${adj3}</u> love for you. Like a <u>${role}</u> sworn to protect his <u>${commonN}</u>, my <u>${body1}</u> is bound to yours, ready to face the challenges that may arise in our <u>${adj4}</u> journey.`;
        paraThree.innerHTML= `In your <u>${body2}</u>, I see the reflection of a thousand stars, each telling tales of the timeless connection between us. Let our love be a <u>${noun3}</u> that guides us through the <u>${place}</u> of life, and may the flame of our passion burn <u>${adverb1}</u>, <u>${verb1}</u> the path to our shared destiny.`;        
        closings.innerHTML= 'Yours Eternally,';
        closingN.innerHTML= `<u>${name2}</u>`;

    });
})();