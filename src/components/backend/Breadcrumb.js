import React from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

function BreadcrumbBackend(props) {
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/customer-backend':
      path = 'Dashboard'
      break
    case '/customer-backend/products-management':
      path = '商品管理'
      break
    case '/customer-backend/orders-management':
      path = '訂單管理'
      break
    case '/customer-backend/contracts-management':
      path = '平台合約'
      break
    case '/customer-backend/template-home':
      path = '模板首頁'
      break
    case '/customer-backend/template-list':
      path = '模板列表'
      break
    case '/customer-backend/template-edit':
      path = '模板編輯'
      break
    case '/customer-backend/sales-index':
      path = '銷售指標'
      break
    case '/customer-backend/ads':
      path = '投放概覽'
      break
    default:
      path = ''
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href={pathname}>{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default withRouter(BreadcrumbBackend)
