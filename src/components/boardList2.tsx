import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// column 데이터 타입 정의
interface Column {
  id: 'board_pk' | 'title' | 'user_pk' | 'reg_dt';
  label: string;
  minWidth?: number;
  align?:  'center' | 'right' | 'left';
  format?: (value: number) => string;
}

// column 데이터 정의
const columns: readonly Column[] = [
  { id: 'board_pk', label: 'tpk', minWidth: 170, align: 'center'},
  { id: 'title', label: '글 제목', minWidth: 170, align: 'center'},
  { id: 'user_pk', label: '작성자', minWidth: 170, align: 'center' },
  { id: 'reg_dt', label: '작성일시', minWidth: 100, align: 'center' },
];

type Board = {
  board_pk: number;
  title: string;
  user_pk: number;
  reg_dt: string;
};

type BoardList = {
  list: [];
};

// Board List 조회
async function getBoard(): Promise<Board[]> {
  try {
    const url = "http://localhost:8000/api/selectBoardList";
    const response = await axios.get<BoardList>(url);
    console.log(response.data.list);
    return response.data.list;
  }  catch (err) {
    console.log(err);
    return [];
  }
  
}

export default function StickyHeadTable() {

  const [board, setBoard] = useState<[] | Board[]>([]);

  useEffect(() => {
    (async () => {
      const boards = await getBoard();
      setBoard(boards);
    })();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {board
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={board.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}