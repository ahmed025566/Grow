import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar, Sort } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'
import '../App.css'

const Employees = () => {
 
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-main-bg rounded-3xl'>
      <Header title="Employees" category="Page" />
      <GridComponent dataSource={employeesData} allowPaging={true} allowSorting toolbar={['Search']} width='auto' >
        <ColumnsDirective>
          {employeesGrid.map( (item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={ [Page, Search, Toolbar, Sort] } />
      </GridComponent>
     
    </div>
  )
}

export default Employees