import PortfolioList from '../portfolioList/PortfolioList'

export default function Portfolio() {

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    },
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => {
          <PortfolioList title={item.title}/>
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://picsum.photos/id/1/200/300" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://picsum.photos/id/1/200/300" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://picsum.photos/id/1/200/300" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://picsum.photos/id/1/200/300" alt="" />
          <h3>Banking App</h3>
        </div>

      </div>
    </div>
  )
}
