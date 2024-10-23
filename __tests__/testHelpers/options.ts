export const optionNames = {
  EnglandGroup: 'England',
  LondonGroup: 'London',
  ChelseaItem: 'Chelsea',
  WestEndItem: 'West End',
  BrightonItem: 'Brighton',
  FranceGroup: 'France',
  ParisItem: 'Paris',
  LyonItem: 'Lyon'
}

export const defaultOptions = [
  {
    name: optionNames.EnglandGroup,
    value: 1,
    children: [
      {
        name: optionNames.LondonGroup,
        value: 2,
        children: [
          {
            name: optionNames.ChelseaItem,
            value: 3,
            children: []
          },
          {
            name: optionNames.WestEndItem,
            value: 4,
            children: []
          }
        ]
      },
      {
        name: optionNames.BrightonItem,
        value: 5,
        children: []
      }
    ]
  },
  {
    name: optionNames.FranceGroup,
    value: 6,
    children: [
      {
        name: optionNames.ParisItem,
        value: 7,
        children: []
      },
      {
        name: optionNames.LyonItem,
        value: 8,
        children: []
      }
    ]
  }
]

export const optionsWithDisabled = [
  {
    name: optionNames.EnglandGroup,
    value: 1,
    children: [
      {
        name: optionNames.LondonGroup,
        value: 2,
        children: [
          {
            name: optionNames.ChelseaItem,
            value: 3,
            children: [],
            disabled: true
          },
          {
            name: optionNames.WestEndItem,
            value: 4,
            children: []
          }
        ]
      },
      {
        name: optionNames.BrightonItem,
        value: 5,
        children: []
      }
    ]
  },
  {
    name: optionNames.FranceGroup,
    value: 6,
    disabled: true,
    children: [
      {
        name: optionNames.ParisItem,
        value: 7,
        children: []
      },
      {
        name: optionNames.LyonItem,
        value: 8,
        children: []
      }
    ]
  }
]

export const largeOptionsList = Array.from({ length: 30 }, (_, index) => ({
  name: `Option ${index}`,
  value: index,
  children: []
}))
