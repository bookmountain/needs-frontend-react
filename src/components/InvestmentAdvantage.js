import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import '@/styles/investmentAdvantage.scss'

const AdvantageData = [
  {
    title: '完整的銷售報表',
    text: `<p>NEEDS提供給商家完整的銷售數據</p>
           <p>透過後台系統即時查看財務報表</p>
           <p>精準地洞察行銷漏斗</p>`,
    imgName: '3-advimg1.png',
  },
  {
    title: '創意的聚集經濟',
    text: `<p>這裡聚集了全台優質的獨立創作者</p>
           <p>販售獨一無二的設計品</p>
           <p>是台灣最大的創意小物集散地</p>`,
    imgName: '3-advimg2.png',
  },
  {
    title: '穩定流量帶來曝光',
    text: `<p>成為我們的合作夥伴</p>
           <p>透過社群行銷為自己的的商店</p>
           <p>帶來更多的曝光以及流量</p>`,
    imgName: '3-advimg3.png',
  },
  {
    title: '商品退貨率低於3%',
    text: `<p>核心客群黏著度高</p>
           <p>對設計品牌具有極高認同度和忠誠度</p>`,
    imgName: '3-advimg4.png',
  },
  {
    title: '會員數超過100萬',
    text: `<p>新會員持續增長</p>
           <p>每日穩定的客流造訪網站</p>`,
    imgName: '3-advimg5.png',
  },
]

const InvestmentAdvantage = ({ aniRef, show }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    show && setItems(AdvantageData)
  }, [show])

  const transitions = useTransition(items, (item) => item.id, {
    keys: (e, i) => i,
    trail: 800,
    config: { duration: 1000 },
    enter: {
      transform: 'translateX(0px)',
      opacity: 1,
    },
    from: (ite) => {
      const idx = items.indexOf(ite)
      return {
        transform: `translateX(${idx % 2 === 0 ? '-500' : '500'}px)`,
        opacity: 0,
      }
    },
  })

  return (
    <>
      <div className="advantageSec container" ref={aniRef}>
        <div className="secTitle">
          <h4>5大優勢</h4>
          <span>加入NEEDS行銷加倍成長</span>
        </div>
        {transitions.map(({ item, key, props }, index) => {
          return (
            <animated.div
              className="advantageContent"
              key={index}
              style={props}
            >
              <div className="advImg">
                <img
                  src={require(`@assets/img/investment/${item.imgName}`)}
                  alt={item.title}
                />
              </div>
              <div className="text">
                <h5>{item.title}</h5>
                <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </div>
              <div className="order">{index + 1}</div>
            </animated.div>
          )
        })}
      </div>
    </>
  )
}

export default InvestmentAdvantage
