# Real world size categorisation task
------

This is a jsPsych-based online categorisation task. Participants are presented with a series of images and need to classify them as _large_ or _small_ based on their real-world size. The paradigm uses **backward masking** to index the need for recurrent processing, with half of the main task trials masked.

### Directory structure

```
.
├── data
├── demographics
├── informed_consent
├── instructions
│   └── instruction_images
├── masks
├── stimuli
├── training_masks
└── training_stimuli
```

### About the different folders

- `data` is where pavlovia automatically sends the collected data.
- `demographics` contains an external `.js` file with the content of the quick demographics survey to appear at the start of the experiment.
- `informed consent` contains an external `.js` file with the content of the informed consent participants will accept at the start of the experiment, alongside a `.css` file to determine some visual features of the consent form.
- `instructions` contains an external `.js` file containing instructions to be displayed at different moments of the experiment, and serves to de-clutter the main script. It also contains a `.css` file to style some visual elements of the instructions, and some images in `instruction_images` to illustrate things.


The extra file *jspsych-7-pavlovia-2021.12.js* comes from this [gitlab repository](https://gitlab.pavlovia.org/shir/jsPsych_SimpleReactionTime/blob/master/jspsych-7-pavlovia-2021.12.js) and is the only way around using the readily available *jspsych-7-pavlovia-2022.1.1.js*
which faces consistent issues with terminating the pavlovia connection. It's a temporary solution.

