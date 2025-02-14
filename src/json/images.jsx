const images = [
  {
    title: 'Model with Shades',
    url: 'https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100',
  },
  {
    title: 'Snow Mountains',
    url: 'https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Canyon Waterfall',
    url: 'https://images.unsplash.com/photo-1610047803124-64ddfad66909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80',
  },
  {
    title: 'Model Sitting',
    url: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww',
  },
  {
    title: 'Still Lake',
    url: 'https://images.unsplash.com/photo-1609952048180-7b35ea6b083b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Craggy Mountain',
    url: 'https://images.unsplash.com/photo-1608241175281-722a1c6111be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    title: 'Misty Forest',
    url: 'https://images.unsplash.com/photo-1523288863878-c79329df9b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1386&q=80',
  },
  {
    title: 'GameBoy',
    url: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww',
  },
  {
    title: 'Leather Mens Stuff',
    url: 'https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww',
  },
  {
    title: 'Yellow Woman Standing',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Mens Watch',
    url: 'https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww',
  },

  {
    title: 'The long Road',
    url: 'https://images.unsplash.com/photo-1532587459811-f057563d1936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500',
  },

  {
    title: 'The Red Forest',
    url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1200',
  },
  {
    title: 'Thousands Yard Stare',
    url: 'https://i.postimg.cc/jqTqd4kx/306097846-392786893005788-1065876871316666649-n.jpg',
  },
  {
    title: 'Eastern Shadow',
    url: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w',
  },
  {
    title: 'Lost Red',
    url: 'https://i.postimg.cc/7LHqY8jM/6.jpg',
  },
  {
    title: 'Cherry Blossum',
    url: 'https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w',
  },

  {
    title: 'The Red Forest',
    url: 'http://stuckincustoms.smugmug.com/Portfolio/i-jQcPqJb/0/X3/Burning-Man-Last-Day-Night%20%28151%20of%201120%29-X3.jpg',
  },
  {
    title: 'Thousands Yard Stare',
    url: 'http://stuckincustoms.smugmug.com/Portfolio/i-KscS8CF/0/X3/Burning-Man-Day-1%20%281006%20of%201210%29-X3.jpg',
  },
  {
    title: 'Eastern Shadow',
    url: 'http://stuckincustoms.smugmug.com/Burning-Man/i-dd9xmfn/0/X3/The%20Steamy%20Car-X3.jpg',
  },
  {
    title: 'Lost Red',
    url: 'http://stuckincustoms.smugmug.com/Portfolio/i-KMjVHRd/0/X3/Andramada-X3.jpg',
  },
  {
    title: 'Red Umbrella',
    url: 'http://stuckincustoms.smugmug.com/Portfolio/i-JSxf5Nm/0/X3/Burning-Man-Day-6%20%28202%20of%201606%29-X3.jpg',
  },
]

export default images
