# Real world size categorisation task
-------------------------------------

This is a jsPsych-based online categorisation task. Participants are presented with a series of images and need to classify them as _large_ or _small_ based on their real-world size. The paradigm uses **backward masking** to index the need for recurrent processing, with half of the main task trials masked.

### Directory structure

```
.
├── README.md
├── data
│   └── _experimental data here_
├── demographics
│   └── demographics.js
├── index.html
├── informed_consent
│   ├── KULeuvenlogo.png
│   ├── informed_consent.css
│   └── informed_consent.js
├── instructions
│   └── instructions.js
├── masks
│   └── main task mask images here
├── jspsych-7-pavlovia-2021.12.js
├── list_stimuli.py
├── stimuli
│   └── main task images here
├── stimuli.js
└── training_stimuli
└── training_stimuli
    └── training images here
```

### Stimuli

Some description of the images here

Some description of the list of stimuli file


### About the different folders

- `data` is where pavlovia automatically sends the collected data.
- `demographics` contains an external `.js` file with the content of the quick demographics survey to appear at the start of the experiment.
- `informed consent` contains an external `.js` file with the content of the informed consent participants will accept at the start of the experiment, alongside a `.css` file to determine some visual features of the consent form.
- `instructions` contains an external `.js` file containing instructions to be displayed at different moments of the experiment, and serves to de-clutter the main script.


The extra file *jspsych-7-pavlovia-2021.12.js* comes from this [gitlab repository](https://gitlab.pavlovia.org/shir/jsPsych_SimpleReactionTime/blob/master/jspsych-7-pavlovia-2021.12.js) and is the only way around using the readily available *jspsych-7-pavlovia-2022.1.1.js*
which faces consistent issues with terminating the pavlovia connection. It's a temporary solution.


### Adapting your own experiment

#### Parameters

At the top of the script are some global parameters you will need to change in order to adapt the template to your needs. Here is a description of each of them.

*Global variables*
- `exp_online` determines if the script initiates a connection with Pavlovia. Switch it to `false` if you wish to run on your local machine.
- `exp_fullscreen` determines if the task will enter full screen or not.
- `ask_informed_consent` determines if an informed consent form appears at the start of the experiment or not.
- `ask_demographics` determines whether some demographics questions are asked to the participants at the start of the experiment or not.
- `exp_instructions` determines whether the general instructions are given at the start of the experiment or not.
- `exp_training` determines whether a training phase is played or not.

*Experimental settings*
- `button_labels` are the actual labels on the buttons displayed during the mouse tracker task.
- `n_runs` determines how many times the full list of main task stimuli is played. Breaks are played in between each run.
- `n_blocks` determines how many blocks each run will be divided into. Each block is followed by a break and a reversal of the button labels (left and right buttons switch place).
- `img_width` is the fixed width in pixels of the images you display.
- `img_height` is commented out by default to not cause aspect ratio transformations in case your images are not of the same size.
- `trial_duration` is the duration of the _full trial_, starting from participants pressing the start cross and determining how long a response can be given.
- `image_duration` is the duration of the image presentation on screen, starting from the beginning of the trial.

*Debugging mode*
- `debugging_mode` can be set to true if you wish to drastically reduce the number of trials, both in the training and main task. That can be useful if you want to debug your task.
- `debugging_length` is the number of trials that you reduce your training and main task to while in debugging mode.


#### Other things to adapt

Here are some extra things that you might want to adapt in your script.

 - The *title of your experiment*: it will show up as the name of the tab opened in the participant's browser. Change it in the `<title>` section of your *index.html* script (line 6).
 - The *ID of your experiment*: optional parameter to record in the data associated with your `initJsPsych` trial. Give a unique, recognisable ID to easily identify the source of your data once you are playing with your result files (search for the `initJsPsych` variable).
 - The **consent form** and **instructions** are left mostly empty and need to be completed.
 - The **demographics** contains some usual questions, but you might want to add or remove some.

### Links

Koening-Robert et al 2023, implementation of the mouse tracker.
 - [Link to the paper](https://www.biorxiv.org/content/10.1101/2023.03.15.532848v1)
 - [Link to the repository](https://osf.io/9g4rz/)
