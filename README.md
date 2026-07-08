# Drum Kit 🥁

An interactive drum kit that plays sounds when you click on-screen pads or press the corresponding keys on your keyboard (W, A, S, D, J, K, L).

**[Live Demo](https://vxnnii.github.io/drums/)**

## About

Drum Kit maps seven keyboard keys to seven drum sounds, triggering both an audio clip and a visual "press" animation on the matching pad — whether the user clicks it with a mouse or presses the key.

This project was built to practice JavaScript event handling: listening for both click and keydown events, playing audio dynamically, and using CSS classes/transitions to give instant visual feedback.

## Features

- Click or keyboard-triggered drum sounds (W, A, S, D, J, K, L)
- Visual "pressed" animation synced to each sound
- Dual event listeners (click + keydown) mapped to the same handler logic
- No page reload or external audio player needed — sounds play instantly in-browser

## Built With

- HTML5
- CSS3
- JavaScript (vanilla, DOM events, Audio API)

## Running Locally

```bash
git clone https://github.com/vxnnii/drums.git
cd drums
open index.html
```

No build steps or dependencies required — it's a static site.

## What I'd Improve Next

- Add a "record and playback" mode to loop a beat
- Support additional keys/sounds for a fuller kit
- Add volume control and a mute toggle

## Author

**Jovanni Elias (Vanni)** — [GitHub](https://github.com/vxnnii)
