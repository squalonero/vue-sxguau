export const Dices = [
  {
    name: 'yellow',
    background: 'yellow',
    color: 'black',
    schema: {
      top: [
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-right"],
        ['power', "point-bottom point-left"],
      ],
      bottom: [
        [1, "point-top point-left"],
        ['heart', "point-middle point-center"],
      ],
      front: [
        [2, "point-top point-left"],
        ['heart', "point-middle point-center"],
      ],
      back: [
        ['heart', "point-top point-right"],
        ['power', "point-bottom point-left"],
      ],
      left: [
        [1, "point-top point-left"],
        ['power', "point-middle point-center"],
      ],
      right: [
        ['heart', "point-top point-right"],
        ['heart', "point-bottom point-left"],
      ]
    }
  },
  {
    name: 'blue',
    background: 'blue',
    color: 'white',
    schema: {
      top: [
        [2, "point-top point-left"],
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-right"],
        ['power', "point-bottom point-left"],
      ],
      bottom: [
        [6, "point-top point-left"],
        ['heart', "point-top point-right"],
        ['power', "point-bottom point-left"],
      ],
      front: [
        [5, "point-top point-left"],
        ['heart', "point-top point-right"],
      ],
      back: [
        [3, "point-top point-left"],
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-right"],
      ],
      left: [
        ['cross', "point-middle point-center"],
      ],
      right: [
        [4, "point-top point-left"],
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-right"],
      ]
    }
  },
  {
    name: 'red',
    background: 'red',
    color: 'white',
    schema: {
      top: [
        ['heart', "point-middle point-center"]
      ],
      bottom: [
        ['heart', "point-top point-left"],
        ['heart', "point-bottom point-right"],
      ],
      front: [
        ['heart', "point-top point-left"],
        ['heart', "point-bottom point-right"],
      ],
      back: [
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-center"],
        ['heart', "point-bottom point-left"]
      ],
      left: [
        ['heart', "point-top point-right"],
        ['heart', "point-middle point-center"],
        ['heart', "point-top point-left"],
        ['power', "point-bottom point-center"],
      ],
      right: [
        ['heart', "point-top point-left"],
        ['heart', "point-bottom point-right"],
      ]
    }
  },
  {
    name: 'black',
    background: 'black',
    color: 'white',
    schema: {
      top: [
      ],
      bottom: [
        ['shield', "point-top point-left"],
        ['shield', "point-bottom point-right"],
      ],
      front: [
        ['shield', "point-top point-left"],
        ['shield', "point-bottom point-right"],
      ],
      back: [
        ['shield', "point-top point-left"],
        ['shield', "point-bottom point-right"],
      ],
      left: [
        ['shield', "point-top point-left"],
        ['shield', "point-top point-right"],
        ['shield', "point-bottom point-left"],
        ['shield', "point-bottom point-right"],
      ],
      right: [
        ['shield', "point-top point-left"],
        ['shield', "point-top point-right"],
        ['shield', "point-bottom point-center"],
      ]
    }
  },
  {
    name: 'brown',
    background: 'brown',
    color: 'white',
    schema: {
      top: [
      ],
      bottom: [
        ['shield', "point-middle point-center"],
      ],
      front: [
      ],
      back: [
        ['shield', "point-middle point-center"],
      ],
      left: [
      ],
      right: [
        ['shield', "point-top point-left"],
        ['shield', "point-bottom point-right"],
      ]
    }
  },
  {
    name: 'grey',
    background: 'default',
    color: 'black',
    schema: {
      top: [
      ],
      bottom: [
        ['shield', "point-middle point-center"],
      ],
      front: [
        ['shield', "point-middle point-center"],
      ],
      back: [
        ['shield', "point-middle point-center"],
      ],
      left: [
        ['shield', "point-top point-left"],
        ['shield', "point-bottom point-right"],
      ],
      right: [
        ['shield', "point-top point-left"],
        ['shield', "point-top point-right"],
        ['shield', "point-bottom point-center"],
      ]
    }
  },
  {
    name: 'default',
    background: 'default',
    color: '#444',
    schema: {
      top: [
        ['point', 'point-middle point-center']
      ],
      bottom: [
        ['point', 'point-top point-right'],
        ['point', 'point-top point-right'],
        ['point', 'point-middle point-right'],
        ['point', 'point-top point-left'],
        ['point', 'point-middle point-left'],
        ['point', 'point-bottom point-right'],
        ['point', 'point-top point-right'],
        ['point', 'point-top point-right'],
        ['point', 'point-bottom point-left']
      ],
      front: [
        ['point', 'point-top point-right'],
        ['point', 'point-top point-left'],
        ['point', 'point-middle point-center'],
        ['point', 'point-bottom point-right'],
        ['point', 'point-bottom point-left']
      ],
      back: [
        ['point', 'point-top point-right'],
        ['point', 'point-bottom point-left']
      ],
      left: [
        ['point', 'point-top point-right'],
        ['point', 'point-middle point-center'],
        ['point', 'point-bottom point-left']
      ],
      right: [
        ['point', 'point-top point-right'],
        ['point', 'point-top point-left'],
        ['point', 'point-bottom point-right'],
        ['point', 'point-bottom point-left']
      ]
    }
  }
]