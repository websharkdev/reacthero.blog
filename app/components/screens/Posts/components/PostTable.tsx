import {
  Box,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { FC, Fragment, useEffect } from 'react'

import { rawTypeProps } from '@/shared/types/home'

type Props = {
  data: any
  className?: string
}

const Cell = ({ data, className }: Props) => {
  return (
    <>
      {className === 'table_cell__children' ? (
        <>
          {data.children?.map((child: any, childID: number) => (
            <Fragment key={childID}>
              {child.type === rawTypeProps[0] &&
                child.children.map((content: any, textID: number) => (
                  <Typography key={textID}>{content.text}</Typography>
                ))}
              {child.type === rawTypeProps[1] && <img src={child.src} />}

              {child.type === 'table' ? <PostTable data={child} className={`${child.type}__children`} /> : null}
              {child.type === 'table_cell' ? <Cell data={child} className={`${child.type}__children`} /> : null}
            </Fragment>
          ))}
        </>
      ) : (
        <MuiTableCell className={className}>
          {data.children?.map((child: any, childID: number) => (
            <Fragment key={childID}>
              {child.type === rawTypeProps[0] &&
                child.children.map((content: any, textID: number) => (
                  <Typography key={textID}>{content.text}</Typography>
                ))}
              {child.type === rawTypeProps[1] && <img src={child.src} />}

              {child.type === 'table' ? <PostTable data={child} className={`${child.type}__children`} /> : null}
              {child.type === 'table_cell' ? <Cell data={child} className={`${child.type}__children`} /> : null}
            </Fragment>
          ))}
        </MuiTableCell>
      )}
    </>
  )
}

export const PostTable: FC<Props> = ({ data, className }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {data?.children.map((row: any, rowID: number) => (
            <MuiTableRow key={rowID}>
              {row.children.map((cell: any, cellID: number) => (
                <Cell data={cell} className={className} key={`${cellID}_cell_of-${rowID}`} />
              ))}
            </MuiTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
