var rooms = {
    "start": {
        "description": "You are on a snow covered field. To your right you see a group of deer and to your left you see a shrub. You can go right to the deer or left to the shrub.",
        "directions": {
            "direction1": "deer",
            "direction2": "shrub"
        },
    },
    "deer": {
        "description": "You walk up to the deer. You jump around and play with a few of the young deer. The deer appear to hear something to the left and get startled. They run to the right. You can follow the deer to the right or go left towards the noise.",
        "directions": {
            "direction1": "follow-deer",
            "noise": "noise"
        }
    },
    "shrub": {
        "description": "As you approach the shrub you catch the scent of some people nearby. You can follow the scent or look behind the shrub.",
        "directions": {
            "direction1": "scent",
            "behind-shrub": "behind-shrub"
        }
    },
    "follow-deer": {
        "description": "You follow the deer up a hill. At the top of the hill you see a plume of smoke to the left and a frozen lake to the right. You can go left towards the smoke or right to the lake.",
        "directions": {
            "direction1": "smoke",
            "lake": "lake"
        }
    },
    "noise": {
        "description": "You go towards the noise, which leads you into a forest. Through the trees you see a moose. You can walk up to the moose or turn and run away.",
        "directions": {
            "direction1": "moose",
            "run": "run"
        }
    },
    "scent": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": "",
        }
    },
    "behind-shrub": {
        "description": "You see a hole in the snow and as well as a pile of berries. You can dig in the hole or eat the berries.",
        "directions": {
            "direction1": "hole",
            "berries": "berries"
        }
    },
    "smoke": {
        "description": "You run to the smoke. You see a man, huskies, and a sled around a fire. You can approach the man or the huskies.",
        "directions": {
            "direction1": "man",
            "huskies": "huskies"
        }
    },
    "lake": {
        "description": "",
        "directions": {
            "direction1": "",
            "right": ""
        }
    },
    "moose": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
    "run": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
    "man": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
    "huskies": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
    "hole": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
    "berries": {
        "description": "",
        "directions": {
            "direction1": "",
            "": ""
        }
    },
}

      