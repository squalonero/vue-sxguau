export const Conditions = [
  {
    name: "Ammalato",
    tag: "diseased",
    desc: "At the start of your turn, test Willpower. If you pass, discard this card or token. If you fail, suffer 1 Fatigue and keep this card or token.",
    monsters_desc: "Creatures who are diseased must test Willpower at the start of their turns. If they pass, the Diseased condition is discarded. If they fail, 1 Fatigue is suffered and the condition remains on that creature.",
    card: {
      front: "/assets/images/conditions/filtered/diseased_front.png",
      back: "/assets/images/conditions/filtered/diseased_back.png"
    }
  },
  {
    name: "Immobilizzato",
    tag: "immobilized",
    desc: "You cannot perform move actions or suffer Fatigue to gain movement points. Discard this card or token at the end of your turn",
    monster_desc: "Creatures who are immobilized cannot perform move actions or suffer Fatigue to gain movement points. The condition is discarded at the end of the immobilized creature's turn. If a creature becomes immobilized during its move action, its move action immediately ends. Merriods are frequently associated with the Immobilize condition.",
  },
  {
    name: "Avvelenato",
    tag: "poisoned",
    desc: "At the start of your turn, test Might. If you pass, discard this card or token. If you fail, suffer 1 Heart and keep this card or token.",
    monster_desc: "Creatures who are poisoned must test Might at the start of their turns. If they pass, the Poisoned condition is discarded. If they fail, 1 Heart is suffered and the condition remains on that creature.",
    card: {
      front: "https://static.wikia.nocookie.net/descent2e/images/4/46/Poisoned_-_Front.png",
      back: "https://static.wikia.nocookie.net/descent2e/images/c/ca/Poisoned_-_Back.png"
    }
  },
  {
    name: "Stordito",
    tag: "stunned",
    desc: " Action: Discard this card or token. This is the only action you may perform on your turn while you have this card or token.",
    monster_desc: "Creatures who are stunned must use an action to discard the stunned condition. That is the only action a stunned creature may perform as long as it is stunned. However, after using an action to discard the condition, both heroes and monsters can then use his or her second action per standard rules.",
    card: {
      front: "https://static.wikia.nocookie.net/descent2e/images/6/62/Stunned_-_Front.png",
      back: "https://static.wikia.nocookie.net/descent2e/images/b/bb/Stunned_-_Back.png"
    }
  },
  {
    name: "Bruciare",
    tag: "burning",
    desc: "You or a figure adjacent to you may perform an action to discard this card or token. At the end of your turn, you and each friendly figure adjacent to you suffers 1 Heart.",
    monster_desc: "",
    card: {
      front: "https://static.wikia.nocookie.net/descent2e/images/4/45/Burning.png",
      back: "https://static.wikia.nocookie.net/descent2e/images/4/45/Burning.png"
    }
  },
  {
    name: "Condannato",
    tag: "doomed",
    desc: "Each time you suffer 1 or more Heart, suffer 1 additional Heart. Each of your attacks gains: Surge: Discard this card or token.",
    monster_desc:"",
    card: {
      front: "https://static.wikia.nocookie.net/descent2e/images/1/1b/Doomed.png",
      back: ""
    }
  },
  {
    name: "Indebolito",
    tag: "weakened",
    desc: "Remove 1 Shield  from each of your defense rolls and 1 Heart from each of your attack rolls.",
    monster_desc: "Remove 1 Shield  from each of your defense rolls and 1 Heart from each of your attack rolls.",
    card: {
      front: "",
      back: ""
    }
  },
  {
    name: "Sanguinamento",
    tag: "bleeding",
    desc: "Action: Discard this card or token. For each other action you resolve while you have this card or token, suffer 1 Fatigue",
    monster_desc: "Action: Discard this card or token. For each other action you resolve while you have this card or token, suffer 1 Fatigue",
    card: {
      front: "",
      back: ""
    }
  },
  {
    name: "Maledetto",
    tag: "cursed",
    desc: "You cannot use monster actions or skills denoted with a Action. At the start of your turn, test Knowledge. If you pass, discard this card or token. If you fail, keep this card or token.",
    monster_desc:"",
    card: {
      front: "",
      back: ""
    }
  },
  {
    name: "Atterrito",
    tag: "terrified",
    desc:"You cannot spend Surge. If there are no enemy figures in your line of sight at the end of your turn, discard this card or token.",
    monster_desc: "",
    card: {
      front: "https://static.wikia.nocookie.net/descent2e/images/0/08/Dj40_terrified.png",
      back: ""
    }
  }
]
