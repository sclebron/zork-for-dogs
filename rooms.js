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
            "direction1": "follow",
            "direction2": "noise"
        }
    },
    "shrub": {
        "description": "As you approach the shrub you catch the scent of some people nearby. You can follow the scent or look behind the shrub.",
        "directions": {
            "direction1": "scent",
            "direction2": "behind-shrub"
        }
    },
    "follow": {
        "description": "You follow the deer up a hill. At the top of the hill you see a plume of smoke to the left and a frozen lake to the right. You can go left towards the smoke or right to the lake.",
        "directions": {
            "direction1": "smoke",
            "direction2": "lake"
        }
    },
    "noise": {
        "description": "You go towards the noise, which leads you into a forest. Through the trees you see a moose. You can walk up to the moose or turn and run away.",
        "directions": {
            "direction1": "moose",
            "direction2": "run"
        }
    },
    "scent": {
        "description": "",
        "directions": {
            "direction1": "feihao",
            "direction2": "",
        }
    },
    "behind-shrub": {
        "description": "You see a hole in the snow and as well as a pile of berries. You can dig in the hole or eat the berries.",
        "directions": {
            "direction1": "hole",
            "direction2": "berries"
        }
    },
    "smoke": {
        "description": "You run to the smoke. You see a man, huskies, and a sled around a fire. You can approach the man or the huskies.",
        "directions": {
            "direction1": "man",
            "direction2": "huskies"
        }
    },
    "lake": {
        "description": "",
        "directions": {
            "direction1": "fhdiao",
            "direction2": ""
        }
    },
    "moose": {
        "description": "",
        "directions": {
            "direction1": "fhdia",
            "direction2": ""
        }
    },
    "run": {
        "description": "",
        "directions": {
            "direction1": "fd",
            "direction2": ""
        }
    },
    "man": {
        "description": "",
        "directions": {
            "direction1": "efr",
            "direction2": ""
        }
    },
    "huskies": {
        "description": "You say hi and they say hi back. The sun is setting and they lay down to go to sleep. You can sleep with them or go up to the man.",
        "directions": {
            "direction1": "sleep",
            "direction2": "man"
        }
    },
    "hole": {
        "description": "",
        "directions": {
            "direction1": "q2",
            "direction2": ""
        }
    },
    "berries": {
        "description": "",
        "directions": {
            "direction1": "few",
            "direction2": ""
        }
    },
    "sleep": {
        "description": "You lay down with them and go to sleep. As the sun is rising you hear a noise and see a large, dark figure. You go wake up the man and when he sees the figure he yells 'bear!'. He quickly attaches you and the other dogs to the sled. You can stay attached or slip out of teh harness and run towards the bear.",
        "directions": {
            "direction1": "attached",
            "direction2": "bear"
        }
    },
    "attached": {
        "description": "You and the other dogs run until you arrive at a river. The man sets up a fishing pole. The huskies travel further up the riverside. You can follow the huskies or stay with the man.",
        "directions": {
            "direction1": "riverside",
            "direction2": "stay"
        }
    },
    "bear": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "riverside": {
        "description": "As you travel along the river one husky starts running and it turns into a race. You and the huskies are running as fast as you can and you're the fastest. There is a hole in the snow and you stop to inspect it. You can sniff around the hole or run back to the man fishing.",
        "directions": {
            "direction1": "sniff",
            "direction2": "fishing"
        }
    },
    "stay": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "sniff": {
        "description": "You start digging and stick your nose in the hole and then keep digging. You feel a sharp scratch on your paw. You can stop digging and go back to the huskies or keep digging.",
        "directions": {
            "direction1": "stop",
            "direction2": "keep"
        }
    },
    "fishing": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "stop": {
        "description": "You run towards the huskies and then together run back towards the man. The man still has his fishing pole set up and a pile of fish next to him. You can sit next to the man and stare at him until he gives you a fish or you can go down by the river and try to catch a fish.",
        "directions": {
            "direction1": "stare",
            "direction2": "catch"
        }
    },
    "keep": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "stare": {
        "description": "After a few seconds of staring at the man, he gives you a fish. You can eat the fish or bring it to one of the huskies.",
        "directions": {
            "direction1": "eat",
            "direction2": "bring"
        }
    },
    "catch": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "eat": {
        "description": "You eat the fish and then curl up and take a nap. When you wake up there is a beautiful sunset. The man is attaching the dogs to the sled. You can walk over to get attached or go to the river to catch a fish.",
        "directions": {
            "direction1": "walk",
            "direction2": "catch"
        }
    },
    "bring": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "walk": {
        "description": "The man attaches you to the sled and you and the huskies start running through the woods. You get to a clearing and see a cabin in the distance. You pull hard towards the cabin until the man detaches you from the sled. You can run to the cabin or past the cabin into the trees behind it.",
        "directions": {
            "direction1": "to",
            "direction2": "past"
        }
    },
    "to": {
        "description": "You run up to the cabin. You can scratch on the door or put your paws up on the windowsill and look through the window.",
        "directions": {
            "direction1": "scratch",
            "direction2": "window"
        }
    },
    "past": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "scratch": {
        "description": "You scratch on the door and a few seconds later the door opens. It's mom and dad! You jump up on dad and get scratches and hugs from mom and dad.",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
    "window": {
        "description": "",
        "directions": {
            "direction1": "",
            "direction2": ""
        }
    },
}