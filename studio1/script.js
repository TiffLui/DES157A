(function(){
    'use strict';
    console.log('reading js');
    const formData = document.getElementById('madlib');

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

    nextBtn.addEventListener('click', function(event) {
        console.log('hi');
        formTwo.style.display = 'block';
        formOne.style.display = 'none';

        event.preventDefault();
    });

    receiveBtn.addEventListener('click', function(event) {
        event.preventDefault();

        formTwo.style.display = 'none';

        // let myText;
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

        /* myText.innerHTML = `My Dearest ${name1},
        As the ${noun1} sets upon the horizon, casting a ${adj1} glow upon my ${noun2}, I find comfort in the ${building1} of your love. Your ${adj2} laughter echoes in the ${pluralN} of my soul, and the melody of your voice is the sweetest ${animal1}'s song.
        
        With quill in ${body1} and ink of ${feeling1}, I write this letter to declare my ${adj3} love for you. Like a ${role} sworn to protect his ${commonN}, my ${body1} is bound to yours, ready to face the challenges that may arise in our ${adj4} journey.
        
        In your ${body2}, I see the reflection of a thousand stars, each telling tales of the timeless connection between us. Let our love be a ${noun3} that guides us through the ${place} of life, and may the flame of our passion burn ${adverb1}, ${verb1} the path to our shared destiny.
        
        Yours Eternally,
        ${name2}`; */

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


        // formData.innerHTML = myText;
        noLetter.innerHTML= 'Letter No. 222';
        receiveP.innerHTML = `My Dearest ${name1},`;
        paraOne.innerHTML = `As the ${noun1} sets upon the horizon, casting a ${adj1} glow upon my ${noun2}, I find comfort in the ${building1} of your love. Your ${adj2} laughter echoes in the ${pluralN} of my soul, and the melody of your voice is the sweetest ${animal1}'s song.`;
        paraTwo.innerHTML= `With quill in ${body1} and ink of ${feeling1}, I write this letter to declare my ${adj3} love for you. Like a ${role} sworn to protect his ${commonN}, my ${body1} is bound to yours, ready to face the challenges that may arise in our ${adj4} journey.`;
        paraThree.innerHTML= `In your ${body2}, I see the reflection of a thousand stars, each telling tales of the timeless connection between us. Let our love be a ${noun3} that guides us through the ${place} of life, and may the flame of our passion burn ${adverb1}, ${verb1} the path to our shared destiny.`;        
        closings.innerHTML= `Yours Eternally, ${name2}`;
    });
})();