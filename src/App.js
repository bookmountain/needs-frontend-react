import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from './actions'
import History from './components/history'

//平台
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FixedButtons from './components/FixedButtons'
import NavbarProdDetails from './components/NavbarProdDetails'

import Home from './pages/Home'
import MemberCard from './pages/Member/MemberCard'
import MemberCardEdit from './pages/Member/MemberCardEdit'
import MemberShop from './pages/Member/MemberShop'
import MemberLike from './pages/Member/MemberLike'
import MemberInformOne from './pages/Member/MemberInformOne'
import MemberInformTwo from './pages/Member/MemberInformTwo'
import MemberInformThree from './pages/Member/MemberInformThree'
import MemberEcoin from './pages/Member/MemberEcoin'
import MemberComment from './pages/Member/MemberComment'
import MemberQA from './pages/Member/MemberQA'
import Investment from './pages/Investment'
import Article from './pages/Article/Article'
import ProductList from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import CreatingOrder from './pages/CreatingOrder'
import Payment from './pages/Payment'
import Complete from './pages/Payment/complete'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'
import Pommedepin111 from './pages/MerchantHome/Pommedepin111'
import Annieeinna_hs from './pages/MerchantHome/annieeinna_hs'
import ToolsLiveBy3 from './pages/MerchantHome/ToolsLiveBy3'
import LittleMountain from './pages/MerchantHome/小山坡'

//商家後台
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BgContainer from './components/backend/BgContainer'
import BackEndDashboard from './pages/BackEnd/Dashboard'
import Sales from './pages/BackEnd/Sales'
import Ads from './pages/BackEnd/Ads'
import CreateArticle from './pages/Article/CreateArticle'
import EditedPage from './pages/BackEnd/TemplateEditedPage/TemplateEditedPage'
import TemplateHome from './pages/BackEnd/TemplateHome/TemplateHome'
import TemplateList from './pages/BackEnd/TemplateList/TemplateList'
import ArticleDetial from './pages/Article/ArticleDetial'
import TestArticleDetial from './pages/Article/TestArticleDetial'
import ProductsManagement from './pages/BackEnd/ProductsManagement'
import ContractsManagement from './pages/BackEnd/ContractsManagement'
import OrdersManagement from './pages/BackEnd/OrdersManagement'

//設置layout props
const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props

  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  )

  //判斷layout
  switch (layout) {
    case 'FRONT_END_NAV': {
      return (
        <>
          <Navbar />
          <FixedButtons />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
    case 'FRONT_END_PROD_NAV': {
      return (
        <>
          <NavbarProdDetails />
          <FixedButtons />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
    case 'BACK_END_NAV': {
      return (
        <>
          <BgContainer />
          <BackEndNavbar />
          <BackEndSidebar />
          {actualRouteComponent}
        </>
      )
    }
    default: {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
  }
}

const url = new URL(window.location)
const pathname = url.pathname

//Route設置
function App(props) {
  useEffect(() => {
    History.listen((location) => props.clearAlerts)
  }, [pathname])

  return (
    <Router>
      <>
        {/* 平台 */}
        <Switch>
          <DynamicLayoutRoute
            exact
            path="/"
            component={Home}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/investment"
            component={Investment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/products/:id"
            component={ProductDetail}
            layout="FRONT_END_PROD_NAV"
          />
          <DynamicLayoutRoute
            path="/cart_list"
            component={Cart}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/order_creating"
            component={CreatingOrder}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/order_payment"
            component={Payment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/order_complete"
            component={Complete}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/articles"
            component={Article}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/createArticle"
            component={CreateArticle}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/article/:id"
            component={TestArticleDetial}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/articleClassic"
            component={ArticleDetial}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/productlist"
            component={ProductList}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/card"
            // path="/member/card/:id"
            component={MemberCard}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/edit"
            component={MemberCardEdit}
            layout="FRONT_END_NAV"
          />

          <DynamicLayoutRoute
            path="/member/shop"
            component={MemberShop}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/like"
            component={MemberLike}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/informone"
            component={MemberInformOne}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/informtwo"
            component={MemberInformTwo}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/informThree"
            component={MemberInformThree}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/ecoin"
            component={MemberEcoin}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/comment"
            component={MemberComment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/QA"
            component={MemberQA}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            // exact
            path="/homepage/pommedepin111/12"
            component={Pommedepin111}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            // exact
            path="/homepage/Annieeinna_hs"
            component={Annieeinna_hs}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            // exact
            path="/homepage/ToolsLiveBy/3"
            component={ToolsLiveBy3}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            // exact
            path="/homepage/LittleMountain"
            component={LittleMountain}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/login"
            component={Login}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/signup"
            component={SignUp}
            layout="FRONT_END_NAV"
          />
          {/* 商家後台 */}
          <DynamicLayoutRoute
            exact
            path="/customer-backend/"
            component={BackEndDashboard}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-home"
            component={TemplateHome}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-edit"
            component={EditedPage}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-list"
            component={TemplateList}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/sales-index"
            component={Sales}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/ads"
            component={Ads}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/products-management"
            component={ProductsManagement}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/contracts-management"
            component={ContractsManagement}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/orders-management"
            component={OrdersManagement}
            layout="BACK_END_NAV"
          />
        </Switch>
      </>
    </Router>
  )
}

const mapStateToProps = (store) => {
  const { alert } = store
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

export default connect(mapStateToProps, actionCreators)(App)
