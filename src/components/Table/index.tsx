import { transparentize } from 'polished';
import {  TableInstance } from 'react-table';
import NoData from '../NoData';

import * as Styled from './styles';

interface TableProps<T extends Object> {
  instance: TableInstance<T>;
}

export default function Table<T extends Object>({ instance }: TableProps<T>) {

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows 
  } = instance;


  return (
    <>
      <Styled.Wrapper 
        cellPadding={0} 
        cellSpacing={0} 
        {...getTableProps()}
      >
        <Styled.Heading>
          { headerGroups.map(headerGroup => (
            <Styled.HeadingRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Styled.HeadingCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Styled.HeadingCell>
              ))}
            </Styled.HeadingRow>
          )) }
        </Styled.Heading>
        <Styled.Body {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Styled.BodyRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Styled.BodyCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Styled.BodyCell>
                  )
                })}
              </Styled.BodyRow>
            )
          })}
        </Styled.Body>
      </Styled.Wrapper>

      {!rows.length && (
        <div style={{ backgroundColor: transparentize(0.95, '#274060') }}>
          <NoData height ={360} />
        </div>
      )}
    </>
  )
}