---
layout: post
title: "VIAL on Keychron v6 Max (ANSI)"
date: 2026-07-19 12:00:00 +1200
category: kb
tags: [Keyboard]
description: ""
post_image:
bw: false
draft: false
---

> Google, Reddit, etc. say VIAL on the Keychron v6 isn't possible (LLM reinforced falsities). This was frustrating, as I'd done it previously based on results from a simple Google search. Much head bashing later, it's working on the v6 Max (Max is "tri-mode" wireless, non-max is USB only). So, here it is for future archaeologists.
{: .callout .callout-danger}


> This is for Keychron V6 MAX *Ansi* Layout with Rotary Encoder (Volume knob) - other models will need a different `vial.json`
{: .callout .callout-warning}

> This is performed in MacOS and requires `brew`
{: .callout .callout-info}

# Build
## QMK Environment

> Following `https://docs.qmk.fm/newbs_getting_started#setting-up-your-qmk-environment`
{: .callout .callout-info}

Install QMK CLI

```sh
curl -fsSL https://install.qmk.fm | sh
```

## VIAL Environment

1.	Get source, following `https://get.vial.today/docs/porting-to-vial.html#1-prepare-your-build-environment`, but using the source at `https://github.com/Tymon3310/vial-qmk`

	```sh
	cd ~
	git clone https://github.com/Tymon3310/vial-qmk
	cd vial-qmk
	```

2.	Clone submodules

	```sh
	make git-submodule
	```

3.	Check everything is ok

	```sh
	qmk doctor
	```

4.	qmk doctor will say it's fine, but make below will get errors about `arm-none-eabi-gcc` and `dfu-suffix` not being found, so reinstall them properly with brew:
   
	```sh
	brew install --cask gcc-arm-embedded
	brew install dfu-util
	```
	
	check:
	```sh
	which arm-none-eabi-gcc
	> /usr/local/bin/arm-none-eabi-gcc
	
	which dfu-suffix
	> /usr/local/bin/dfu-suffix
	```

5.	Test against default
	
	> paths are relative to `~/vial-qmk/keyboards`
	{: .callout .callout-info}

	```sh
	make keychron/v6_max/ansi_encoder:default
	```
	```sh
	Making keychron/v6 _max/ansi _encoder with keymap default
	arm-none-eabi-gcc (Arm GNU Toolchain 14.2.Rell (Build arm-14.52)) 14.2.1 20241119
	Copyright (C) 2024 Free Software Foundation, Inc.
		
	This is free software; see the source for copying conditions. There is NO source for There is NO
	warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
	
	Compiling:./keyboards/keychron/common/keychron_common.c					[OK]
	Compiling: ./keyboards/keychron/common/factory_test.c					[OK]
	Linking: .build/keychron_v6_max_ansi_encoder_default.elf				[OK]
	Creating binary load file for flashing: build/keychron_v6 max_ansi encoder default.bin 	[OK]
	Creating load file for flashing: . build/keychron_v6_max_ansi_encoder_default.hex	[OK]
	
	Size after:
	text    data    bss	dec    hex filename
	   0   63124	  0   63124   f694 keychron_v6_max_ansi_encoder_default.bin
	
	Copying keychron v6 max ansi encoder default.bin to qmk firmware folder			[OK]
	```

# Vial Configuration
## vial.json
> **NOTE:** The Enter and R Shift keys are left blank somehow, but the remainder of the layout is correct. The keys appear to work regardless, and can be populated in Vial gui
{: .callout .callout-warning}

```json
{
  "name": "Keychron V6 MAX Ansi Encoder",
  "vendorId": "0x3434",
  "productId": "0x0960",
  "lighting": "vialrgb",
  "matrix": {
    "rows": 6,
    "cols": 21
  },
  "customKeycodes": [
    {
      "name": "Left Option",
      "title": "Left Option",
      "shortName": "LOpt"
    },
    {
      "name": "Right Option",
      "title": "Right Option",
      "shortName": "ROpt"
    },
    {
      "name": "Left Cmd",
      "title": "Left Command",
      "shortName": "LCmd"
    },
    {
      "name": "Right Cmd",
      "title": "Right Command",
      "shortName": "RCmd"
    },
    {
      "name": "Misson Control",
      "title": "Misson Control in Mac",
      "shortName": "MCtl"
    },
    {
      "name": "Lanuch Pad",
      "title": "Lanuch Pad in Windows",
      "shortName": "LPad"
    },
    {
      "name": "Task View",
      "title": "Task View in Windows",
      "shortName": "Task"
    },
    {
      "name": "File Explorer",
      "title": "File Explorer in Windows",
      "shortName": "File"
    },
    {
      "name": "Screen shot",
      "title": "Screenshot in macOS",
      "shortName": "SShot"
    },
    {
      "name": "Cortana",
      "title": "Cortana in Windows",
      "shortName": "Cortana"
    },
    {
      "name": "Siri",
      "title": "Siri in macOS",
      "shortName": "Siri"
    },
    {
      "name": "Bluetooth Host 1",
      "title": "Bluetooth Host 1",
      "shortName": "BTH1"
    },
    {
      "name": "Bluetooth Host 2",
      "title": "Bluetooth Host 2",
      "shortName": "BTH2"
    },
    {
      "name": "Bluetooth Host 3",
      "title": "Bluetooth Host 3",
      "shortName": "BTH3"
    },
    {
      "name": "2.4G",
      "title": "2.4G",
      "shortName": "2.4G"
    },
    {
      "name": "Battery Level",
      "title": "Show battery level",
      "shortName": "Batt"
    }
  ],
  "layouts": {
    "keymap": [
      [
        {
          "x": 13.5
        },
        "0,0\n\n\n\n\n\n\n\n\ne",
        "0,1\n\n\n\n\n\n\n\n\ne"
      ],
      [
        {
          "c": "#777777"
        },
        "0,0\nESC",
        {
          "x": 0.25,
          "c": "#cccccc"
        },
        "0,1",
        "0,2",
        "0,3",
        "0,4",
        {
          "x": 0.25,
          "c": "#aaaaaa"
        },
        "0,5",
        "0,6",
        "0,7",
        "0,8",
        {
          "x": 0.25,
          "c": "#cccccc"
        },
        "0,9",
        "0,10",
        "0,11",
        "0,12",
        {
          "x": 0.25
        },
        "0,13",
        {
          "x": 0.25,
          "c": "#aaaaaa"
        },
        "0,14",
        "0,15",
        "0,16",
        {
          "x": 0.25,
          "c": "#cccccc"
        },
        "0,17",
        "0,18",
        "0,19",
        "0,20"
      ],
      [
        {
          "y": 0.25
        },
        "1,0",
        "1,1",
        "1,2",
        "1,3",
        "1,4",
        "1,5",
        "1,6",
        "1,7",
        "1,8",
        "1,9",
        "1,10",
        "1,11",
        "1,12",
        {
          "c": "#aaaaaa",
          "w": 2
        },
        "1,13",
        {
          "x": 0.25
        },
        "1,14",
        "1,15",
        "1,16",
        {
          "x": 0.25,
          "c": "#cccccc"
        },
        "1,17",
        "1,18",
        "1,19",
        "1,20"
      ],
      [
        {
          "c": "#aaaaaa",
          "w": 1.5
        },
        "2,0",
        {
          "c": "#cccccc"
        },
        "2,1",
        "2,2",
        "2,3",
        "2,4",
        "2,5",
        "2,6",
        "2,7",
        "2,8",
        "2,9",
        "2,10",
        "2,11",
        "2,12",
        {
          "w": 1.5
        },
        "2,13",
        {
          "x": 0.25,
          "c": "#aaaaaa"
        },
        "2,14",
        "2,15",
        "2,16",
        {
          "x": 0.25,
          "c": "#cccccc"
        },
        "2,17",
        "2,18",
        "2,19",
        {
          "h": 2
        },
        "3,20"
      ],
      [
        {
          "c": "#aaaaaa",
          "w": 1.75
        },
        "3,0",
        {
          "c": "#cccccc"
        },
        "3,1",
        "3,2",
        "3,3",
        "3,4",
        "3,5",
        "3,6",
        "3,7",
        "3,8",
        "3,9",
        "3,10",
        "3,11",
        {
          "c": "#777777",
          "w": 2.25
        },
        "3,12",
        {
          "x": 3.5,
          "c": "#cccccc"
        },
        "3,17",
        "3,18",
        "3,19"
      ],
      [
        {
          "c": "#aaaaaa",
          "w": 2.25
        },
        "4,0",
        {
          "c": "#cccccc"
        },
        "4,2",
        "4,3",
        "4,4",
        "4,5",
        "4,6",
        "4,7",
        "4,8",
        "4,9",
        "4,10",
        "4,11",
        {
          "c": "#aaaaaa",
          "w": 2.75
        },
        "4,12",
        {
          "x": 1.25,
          "c": "#777777"
        },
        "4,15",
        {
          "x": 1.25,
          "c": "#cccccc"
        },
        "4,17",
        "4,18",
        "4,19",
        {
          "h": 2
        },
        "5,20"
      ],
      [
        {
          "c": "#aaaaaa",
          "w": 1.25
        },
        "5,0",
        {
          "w": 1.25
        },
        "5,1",
        {
          "w": 1.25
        },
        "5,2",
        {
          "c": "#cccccc",
          "w": 6.25
        },
        "5,6",
        {
          "c": "#aaaaaa",
          "w": 1.25
        },
        "5,10",
        {
          "w": 1.25
        },
        "5,11",
        {
          "w": 1.25
        },
        "5,12",
        {
          "w": 1.25
        },
        "5,13",
        {
          "x": 0.25,
          "c": "#777777"
        },
        "5,14",
        "5,15",
        "5,16",
        {
          "x": 0.25,
          "c": "#cccccc",
          "w": 2
        },
        "5,17",
        "5,19"
      ]
    ]
  }
}
```

## keymap.c

> Vial states that the layers should be referenced by index (0,1,2…) rather than name (`mac_base` etc)
{: .callout .callout-warning}

```sh
nano ~/vial-qmk/keyboards/keychron/v6_max/ansi_encoder/keymaps/vial/keymap.c
```

Change:

```c
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][2] = {
    [MAC_BASE] = {ENCODER_CCW_CW(KC_VOLD, KC_VOLU)},
    [MAC_FN]   = {ENCODER_CCW_CW(RGB_VAD, RGB_VAI)},
    [WIN_BASE] = {ENCODER_CCW_CW(KC_VOLD, KC_VOLU)},
    [WIN_FN]   = {ENCODER_CCW_CW(RGB_VAD, RGB_VAI)},
};
```

to

```c
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][2] = {
    [0] = {ENCODER_CCW_CW(KC_VOLD, KC_VOLU)},
    [1] = {ENCODER_CCW_CW(RGB_VAD, RGB_VAI)},
    [2] = {ENCODER_CCW_CW(KC_VOLD, KC_VOLU)},
    [3] = {ENCODER_CCW_CW(RGB_VAD, RGB_VAI)},
};
```

# Vial Build

```sh
make keychron/v6_max/ansi_encoder:vial
```

# Flash
1.	Open QMK console
	
	```sh
	qmk console
	```
	
2.	Unplug Keyboard
	
3.	Hold Escape and plug in keyboard - should see `Bootloader Connected`

	```sh
	Looking or devices...
	Ψ Bootloader Connected: stm32-dfu: STM32 BOOTLOADER
	```

4.	Press `Control-C` to exit qmk console
	
5.	flash (from the `~/vial-qmk/` folder)

	```sh
	dfu-util -a 0 --dfuse-address 0x08000000:leave -D keychron_v6_max_ansi_encoder_vial.bin
	```
	