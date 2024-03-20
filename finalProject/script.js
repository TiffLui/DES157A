(function(){
    'use strict';
    console.log('reading js');

    let inventory = [];

    // Select elements from your HTML
    const battleSection = document.getElementById('battle-section');
    const playerPokemonImg = document.getElementById('playerPokemonImg');
    const enemyPokemonImg = document.getElementById('enemyPokemonImg');
    const messages = document.getElementById('messages');
    const attackBtn = document.getElementById('attackBtn');
    const playerHealthBar = document.getElementById('playerHealthBar');
    const enemyHealthBar = document.getElementById('enemyHealthBar');

    //Overlay elements for each  Pokemon
    const overlayDragonite = document.getElementById('overlay-dragonite');
    const overlayFlareon = document.getElementById('overlay-flareon');
    const overlayGlaceon = document.getElementById('overlay-glaceon');
    const overlayGroudon = document.getElementById('overlay-groudon');
    const overlayJolteon = document.getElementById('overlay-jolteon');
    const overlayLeafeon = document.getElementById('overlay-leafeon');

    const overlayInventory = document.getElementById('overlay-inventory');
    

    //Close button elements for each overlay
    const closeBtnDragonite = document.querySelector('#overlay-dragonite');
    const closeBtnFlareon = document.querySelector('#overlay-flareon');
    const closeBtnGlaceon = document.querySelector('#overlay-glaceon');
    const closeBtnGroudon = document.querySelector('#overlay-groudon');
    const closeBtnJolteon = document.querySelector('#overlay-jolteon');
    const closeBtnLeafeon = document.querySelector('#overlay-leafeon');

    const closeBtnInventory = document.querySelector('#overlay-inventory');

    const pokemonYes = [
        { id: 'yesDragonite', name: 'dragonite' },
        { id: 'yesFlareon', name: 'flareon' },
        { id: 'yesGlaceon', name: 'glaceon' },
        { id: 'yesGroudon', name: 'groudon' },
        { id: 'yesJolteon', name: 'jolteon' },
        { id: 'yesLeafeon', name: 'leafeon' }
    ];

    //Music
    const homeMusic = document.getElementById('homeMusic');
    const battleMusic = document.getElementById('battleMusic');

    //When the Game Loads
    document.addEventListener('DOMContentLoaded', function() {
        // Show the overlay when the page loads
        const overlay = document.getElementById('instructions');
        if (overlay) {
            overlay.style.display = 'flex';
        } else {
            console.error('Overlay element not found');
        }
    
        // Add an event listener to the "Start Game" button
        var startGameButton = document.getElementById('startGameButton');
        if (startGameButton) {
            startGameButton.addEventListener('click', function() {
                homeMusic.play();
                // Hide the overlay
                if (overlay) {
                    overlay.style.display = 'none';
                }
    
                // Play the home music
                if (homeMusic) {
                    homeMusic.play().then(function() {
                        // The audio started playing successfully.
                    }).catch(function(error) {
                        // An error occurred.
                        console.log('Failed to play music:', error);
                    });
                } else {
                    console.error('Home music element not found');
                }
            });
        } else {
            console.error('Start game button not found');
        }
    });

    //Game State variables
    let playerPokemon, enemyPokemon, attacker, defender, defenderIndex;

    const gameData = {
        //Game Data Setup
        pokemons: [],
        health: [100, 100],
        attack: [25, 30, 40, 50],
        attackMessage: [
            'A weak attack for only 25 HP!',
            'An attack of 30 HP!',
            'A large scale attack for 40 HP!',
            'Oh!!! That took out 50 HP!'
        ],
        defendMessage: [
            'no defense, hit!', 
            'some defense, partial hit', 
            'total defense, no hit!'
        ],
        index: 0
    };

    // Function to initiate the battle
    function startBattle(selectedPokemon) {
        homeMusic.pause();
        battleMusic.play();
        gameData.pokemons.push(selectedPokemon);
        playerPokemon = 'rowlet';
        enemyPokemon = selectedPokemon; 

        gameData.pokemons.push(enemyPokemon);

        enemyPokemonImg.src = `images/${enemyPokemon}.png`; // Set image paths
        playerPokemonImg.src = 'images/rowlet.png'; // Set correct image path for user image
        
        battleSection.style.display = 'block';


        // Scroll to the battle section smoothly
        setTimeout(() => {
            battleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        // Disable scrolling on the body element
        document.body.style.overflow = 'hidden';

        gameData.health = [100, 100];
        updateHealthBar(playerHealthBar, gameData.health[0]);
        updateHealthBar(enemyHealthBar, gameData.health[1]);

        messages.innerHTML = `<p>Choose your action!</p>`;
        attackBtn.className = 'showing';
    }


     // Function to update health bar UI
    function updateHealthBar(healthBar, health) {
        healthBar.style.width = `${health}%`;
        healthBar.innerText = `${health}%`;

    }


    // Function to check the winning condition after an attack
    function checkWinningCondition(defenderIndex, attacker) {
        setTimeout(function(){
            playerPokemonImg.removeAttribute('class');
            enemyPokemonImg.removeAttribute('class'); 

            // ... Check if the defender is defeated ...
            const health = Math.floor(parseFloat(gameData.health[defenderIndex]));

            if(health < 1) {
                messages.innerHTML = `<p><strong>${attacker}</strong> has won the battle!</p>`;
                endBattle();
            } else {
                gameData.index = gameData.index === 0 ? 1 : 0;
                if (gameData.index === 0) {
                    messages.innerHTML = `<p>It's now <strong>Rowlet's</strong> turn!</p>`;
                } else {
                    messages.innerHTML = `<p>It's now <strong>${gameData.pokemons[1]}'s</strong> turn!</p>`;
                }
                attackBtn.className = 'showing';
            }
        }, 3000);// Delay to simulate attack duration
    }



    attackBtn.addEventListener('click', monsterAttack);


    // Function to handle an attack action
    function monsterAttack() {

        if(gameData.index){
            attacker = gameData.pokemons[1];
            defender = gameData.pokemons[0];
            defenderIndex = 0;
        }
        else {
            attacker = gameData.pokemons[0];
            defender = gameData.pokemons[1];
            defenderIndex = 1;
        }


        let attackerIndex = 1 - defenderIndex;


        const thisAttack = Math.floor(Math.random() * gameData.attack.length);
        const thisDefense = Math.floor(Math.random() * gameData.defendMessage.length);

        attackBtn.className = 'hidden';
        

        if(gameData.index == 0){
        playerPokemonImg.className = `attack${thisAttack}`;
        }
        else{
            enemyPokemonImg.className = `attack${thisAttack}`;
        }

        
        // Delay to simulate attack animation
        setTimeout(function(){
            messages.innerHTML = `<p><strong>${gameData.pokemons[defenderIndex]}</strong> ${gameData.defendMessage[thisDefense]}</p>`;

            if(gameData.index == 0){
                playerPokemonImg.className = `defended${thisDefense}`;
            }
            else{
                enemyPokemonImg.className = `defended${thisDefense}`;
            }

            if(thisDefense === 0) {
                gameData.health[defenderIndex] -= gameData.attack[thisAttack];
            } else if(thisDefense === 1) {
                gameData.health[defenderIndex] -= gameData.attack[thisAttack] / 2;
            }

             // ... Adjusting health and checking for winning condition ...
            let health = Math.floor(parseFloat(gameData.health[defenderIndex]));
            
            if(health < 0) {health = 0;}
            updateHealthBar(defenderIndex === 0 ? playerHealthBar : enemyHealthBar, gameData.health[defenderIndex]);

            checkWinningCondition(defenderIndex, attacker);
        }, 2500);
    }

        //Click "Run" to scroll back up
        const runBtn = document.getElementById('runBtn');
    
        runBtn.addEventListener('click', function() {
            // Smoothly scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            battleMusic.pause();
            homeMusic.play();
        });


     // Function to end the battle
    function endBattle() {
        battleMusic.pause();
        homeMusic.play();
        playerHealthBar.style.width = '100%';
        enemyHealthBar.style.width = '100%';

        //Add defeated Pokemon into the inventory
        inventory.push(enemyPokemon);

         // Enable scrolling again
        document.body.style.overflow = 'auto';

         // Smooth scroll back to the top of the page
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        // Delay hiding the battle section to match the scroll duration
        setTimeout(() => {
            document.getElementById('battle-section').style.display = 'none';
        }, 1000);

        //Update inventory display
        updateInventoryDisplay();

        function updateInventoryDisplay() {
            const inventoryDisplay = document.getElementById('inventory-display');
            inventoryDisplay.innerHTML = '';
        
            // Add each Pokémon in the inventory to the display
            inventory.forEach(pokemon => {
                const pokemonElement = document.createElement('div');
                const pokemonImg = document.createElement('img');
                pokemonImg.src = `images/${pokemon}.png`; // Set the image source
                pokemonElement.textContent = pokemon;
                pokemonImg.alt = pokemon
                pokemonImg.style.maxHeight = '230px';
                pokemonElement.appendChild(pokemonImg);
                inventoryDisplay.appendChild(pokemonElement);
            });
        }
    }

    /*------------------------------OVERLAY------------------------------- */
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

    document.getElementById('inventory-b').addEventListener('click', function() {
        overlayInventory.style.display = 'block';
    });
    closeBtnInventory.addEventListener('click', function() {
        overlayInventory.style.display = 'none';
    });

    const buttonIds = ['Dragonite', 'Flareon', 'Glaceon', 'Groudon', 'Jolteon', 'Leafeon'];

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

    /*--------------Event listeners to initiate battles-------------------------*/
    pokemonYes.forEach(pokemon => {
        document.getElementById(pokemon.id).addEventListener('click', () => startBattle(pokemon.name));
    });

}());
