/* 
INSTRUCTIONS CONTENT
--------------------
This file contains the content of all the instructions you will give
in the mouse tracker task. Modify them as you wish.
*/

const INSTRUCTIONS = {

    // A welcome screen to say hi to the participant
    Welcome : function() {

        return (
            '<h3> Hello and welcome!</h3>' +
            '<br>' +
            '<p> In this experiment, you will see images, and classify them as fast </p>' +
            '<p> and accurately as you can. Your task is to report if the objects you </p>' +
            '<p> see are <b>large</b> or <b>small</b>. </p>' +
            '<br>'
        );
    },
    
    // Start giving your actual instructions here
    First_page: function() {
        
        return (
            "<p>There will be different categories of images, some small, some large.</p>" +
            "<p>These four categories are <b><i>small</i></b>: " +
            "<i>cats</i>, <i>bananas</i>, <i>birds</i>, and <i>fire hydrants</i>.</p>" +
            '<div class="image-container">' +
                '<img src="./instructions/instruction_images/instruction_cat.png" alt="Cat">' +
                '<img src="./instructions/instruction_images/instruction_banana.png" alt="Banana">' +
                '<img src="./instructions/instruction_images/instruction_bird.png" alt="Bird">' +
                '<img src="./instructions/instruction_images/instruction_firehydrant.png" alt="Fire hydrant">' +
            '</div>' +
            "<br>" +
            "<p>These four categories are <b><i>large</i></b> :</p>" +
            "<i>trees</i>, <i>people</i>, <i>buildings</i>, and <i>buses</i>.</p>" +
            '<div class="image-container">' +
                '<img src="./instructions/instruction_images/instruction_tree.png" alt="Cat">' +
                '<img src="./instructions/instruction_images/instruction_person.png" alt="Banana">' +
                '<img src="./instructions/instruction_images/instruction_building.png" alt="Bird">' +
                '<img src="./instructions/instruction_images/instruction_bus.png" alt="Fire hydrant">' +
            '</div>' +
            "<br>"
        );
    },
    
    // Another page of instructions at the start (add/remove as you wish)
    Second_page: function() {

        return (
            '<div> Use the <b>F</b> and <b>J</b> keys on your keyboard to respond.  </div>' + 
            '<br>' +
            '<body>' +
            '<div class="keyboard">' +
                '<div class="row">' +
                '<div class="other_key key__oneandhalf"></div>' +
                '<div class="letter_key">A</div>' +
                '<div class="letter_key">Z</div>' +
                '<div class="letter_key">E</div>' +
                '<div class="letter_key">R</div>' +
                '<div class="letter_key">T</div>' +
                '<div class="letter_key">Y</div>' +
                '<div class="letter_key">U</div>' +
                '<div class="letter_key">I</div>' +
                '<div class="letter_key">O</div>' +
                '<div class="letter_key">P</div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__symbols"></div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="other_key key__caps"></div>' +
                '<div class="letter_key">Q</div>' +
                '<div class="letter_key">S</div>' +
                '<div class="letter_key">D</div>' +
                '<div class="response_key">F</div>' +
                '<div class="letter_key">G</div>' +
                '<div class="letter_key">H</div>' +
                '<div class="response_key">J</div>' +
                '<div class="letter_key">K</div>' +
                '<div class="letter_key">L</div>' +
                '<div class="letter_key">M</div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__enter"></div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="other_key key__shift-left"></div>' +
                '<div class="other_key"></div>' +
                '<div class="letter_key">W</div>' +
                '<div class="letter_key">X</div>' +
                '<div class="letter_key">C</div>' +
                '<div class="letter_key">V</div>' +
                '<div class="letter_key">B</div>' +
                '<div class="letter_key">N</div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__symbols"></div>' +
                '<div class="other_key key__shift-right"></div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="other_key key__bottom-funct"></div>' +
                '<div class="other_key key__bottom-funct"></div>' +
                '<div class="other_key key__bottom-funct"></div>' +
                '<div class="other_key key__spacebar"></div>' +
                '<div class="other_key"></div>' +
                '<div class="other_key"></div>' +
                '<div class="other_key key__arrow"></div>' +
                '<div class="other_key key__arrow"></div>' +
                '<div class="other_key key__arrow"></div>' +
                '</div>' +
            '</div>' +
            '</body>' +
            '<p> The keys will alternate across the experiment. Stay attentive, you will receive more instructions along the way. </p>' +
            '<p> The images might appear degraded and be difficult to recognise. Stay focused and do your best to reach a good score! </p>' +
            " <br> <br>"            
        )
    },
    
    // Instructions to give at the start of the training (if you have training)
    Pre_training_instructions: function() {

        return (
            "<p> Let's start with some training. You will be shown some images during this phase, similar to those you will see in the real task. </p>" +
            "<p> You will get feedback after each trial.</p>" +
            "<p> In the next trials, press <b>" + update_response_mapping()[0].key + "</b> to report <b>" + update_response_mapping()[0].label + "</b>, and press <b>" + update_response_mapping()[1].key+"</b> to report <b>" + update_response_mapping()[1].label + "</b>.</p>" +
            "Remember to be as fast and accurate as you can.</p>" +
            "<p> <b> Good luck! </b> </p>" +
            "<p> Press <i>space</i> to begin. </p>"
        )
    },

    // Instructions to give at the end of the training 
    Post_training_instructions: function() {

        return (
            "<p> Well done, the training is now over. The full task will begin.<br>" + 
            "You won't receive feedback after each trial anymore.</p>" +
            "<p> Do your best to be fast and accurate. </p>" + 
            "<p> <b> Good luck! </b> </p>" +
            "<p> Press <i>space</i> to begin. </p>"
        )
    },

    // Instructions to give before each run
    Pre_task_instructions: function(n_runs, n_blocks, block_length) {

        return (
            "<h3> Start of the main task </h3>" +
            "<h5> <i> Get ready </i> </h5>" +
            "<p> You are about to start the main task. It contains " + n_runs*n_blocks + " blocks of " + block_length + " trials.</p>" +
            "<p> You will be able to take breaks in between each, and will receive feedback on your performance.</p>" +
            "<br><br>" +
            "<p> <b>Response keys</b>: in the next trials, press <b>" + update_response_mapping()[0].key + "</b> to report <b>" + update_response_mapping()[0].label + "</b>, and press <b>" + update_response_mapping()[1].key+"</b> to report <b>" + update_response_mapping()[1].label + "</b>.</p>" +
            "<br><br>" +
            "<p> When you're ready, press <b><i>space</i></b>.</p>"
        )
    },
    
    // Instructions to give after each run
    Post_task_instructions: function() {

        return (
            "<h4> The experiment is now over! </h4>" +
            "<p> Well done, and thank you for taking part.</p>" +
            "<p> Press <b><i>space</i></b> to continue.</p>" 
        )
    }
}