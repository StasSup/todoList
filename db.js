const idRange = 1000000;

module.exports = () => {
  return  {
    taskList: [
      {
        id: Math.floor(Math.random() * idRange),
        date: new Date(),
        tasks: [
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Visit David',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Goceries For Dinner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Fix Dad`s iPad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
        ],
      },
      {
        id: Math.floor(Math.random() * idRange),
        date: new Date(2023, 0, 13),
        tasks: [
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Visit David',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Goceries For Dinner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Fix Dad`s iPad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
        ],
      },
      {
        id: Math.floor(Math.random() * idRange),
        date: new Date(2023, 0, 12),
        tasks: [
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Visit David',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Goceries For Dinner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Fix Dad`s iPad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
        ],
      },
      {
        id: Math.floor(Math.random() * idRange),
        date: new Date(2023, 0, 11),
        tasks: [
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Visit David',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: false,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Goceries For Dinner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Fix Dad`s iPad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
        ],
      },
      {
        id: Math.floor(Math.random() * idRange),
        date: new Date(2023, 0, 10),
        tasks: [
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Visit David',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Goceries For Dinner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
          {
            id: Math.floor(Math.random() * idRange),
            title: 'Fix Dad`s iPad',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            completed: true,
          },
        ],
      },
    ],
  };
};
