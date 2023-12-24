import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Resize, Sort, ContextMenu, Filter, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import '../App.css'

const Orders = () => {
 
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-main-bg rounded-3xl'>
      <Header title="Orders" category="Page" />
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging={true} allowSorting >
        <ColumnsDirective>
          {ordersGrid.map( (item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={ [Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport] } />
      </GridComponent>
     
    </div>
  )
}

export default Orders