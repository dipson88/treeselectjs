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

export const optionsValues = {
  EnglandGroup: 1,
  LondonGroup: 2,
  ChelseaItem: 3,
  WestEndItem: 4,
  BrightonItem: 5,
  FranceGroup: 6,
  ParisItem: 7,
  LyonItem: 8
}

export const noResultsText = 'No results found...'

export const defaultOptions = [
  {
    name: optionNames.EnglandGroup,
    value: optionsValues.EnglandGroup,
    children: [
      {
        name: optionNames.LondonGroup,
        value: optionsValues.LondonGroup,
        children: [
          {
            name: optionNames.ChelseaItem,
            value: optionsValues.ChelseaItem,
            children: []
          },
          {
            name: optionNames.WestEndItem,
            value: optionsValues.WestEndItem,
            children: []
          }
        ]
      },
      {
        name: optionNames.BrightonItem,
        value: optionsValues.BrightonItem,
        children: []
      }
    ]
  },
  {
    name: optionNames.FranceGroup,
    value: optionsValues.FranceGroup,
    children: [
      {
        name: optionNames.ParisItem,
        value: optionsValues.ParisItem,
        children: []
      },
      {
        name: optionNames.LyonItem,
        value: optionsValues.LyonItem,
        children: []
      }
    ]
  }
]

export const optionsWithDisabled = [
  {
    name: optionNames.EnglandGroup,
    value: optionsValues.EnglandGroup,
    children: [
      {
        name: optionNames.LondonGroup,
        value: optionsValues.LondonGroup,
        children: [
          {
            name: optionNames.ChelseaItem,
            value: optionsValues.ChelseaItem,
            children: [],
            disabled: true
          },
          {
            name: optionNames.WestEndItem,
            value: optionsValues.WestEndItem,
            children: []
          }
        ]
      },
      {
        name: optionNames.BrightonItem,
        value: optionsValues.BrightonItem,
        children: []
      }
    ]
  },
  {
    name: optionNames.FranceGroup,
    value: optionsValues.FranceGroup,
    disabled: true,
    children: [
      {
        name: optionNames.ParisItem,
        value: optionsValues.ParisItem,
        children: []
      },
      {
        name: optionNames.LyonItem,
        value: optionsValues.LyonItem,
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

export const largeNestedOptionsList = Array.from({ length: 1000 }, (_, index) => ({
  name: `Option ${index}`,
  value: index,
  children: Array.from({ length: 3 }, (_, subIndex) => ({
    name: `SubOption ${index}-${subIndex}`,
    value: `${index}-${subIndex}`,
    children: Array.from({ length: 3 }, (_, subSubIndex) => ({
      name: `SubSubOption ${index}-${subIndex}-${subSubIndex}`,
      value: `${index}-${subIndex}-${subSubIndex}`,
      children: []
    }))
  }))
}))
