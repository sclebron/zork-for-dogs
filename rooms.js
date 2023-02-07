var rooms = {
    "start": {
        "description": "You are on a snow covered field. To your right you see a group of deer and to your left you see a shrub. You can go right to the deer or left to the shrub.",
        "directions": {
            "right": "deer",
            "left": "shrub"
        },
    },
    "deer": {
        "description": "You walk up to the deer. You jump around and play with a few of the young deer. The deer appear to hear something to the left and get startled. They run to the right. You can follow the deer to the right or go left towards the noise.",
        "directions": {
            "right": "follow-deer",
            "left": "noise"
        }
    },
    "shrub": {
        "description": "As you approach the shrub you catch the scent of some people nearby. You can follow the scent or look behind the shrub.",
        "directions": {
            "": "",
            "": ""
        }
    },
    "follow-deer": {
        "description": "",
        "directions": {

        }
    },
    "noise": {
        "description": "",
        "directions": {

        }
    }
}

// "items": {
//     "sword": "You see a shimmering light in a bush. "
// },
// "npcs": {
//     "old lady": "The old lady emits a strange noise and attacks you."
// }        