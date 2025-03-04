import React, { ReactElement, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, CircularProgress, Typography } from "@mui/material";
import Row from "./Row";
import { SECTION_MIN_HEIGHT } from "../../../utils/constants";

interface ColumnGroupingTableProps {
  columns: any;
  rows: any;
  head?: ReactElement;
  loading?: boolean;
  handleRefreshData?: any;
  selectedRows?: any;
  setSelectedRows?: any;
  handleSelectedMenu?: (props: any) => void;
  activeSelectedMenu?: boolean;
}

const LayoutTable: React.FC<ColumnGroupingTableProps> = ({
  columns,
  rows,
  head,
  loading,
  handleRefreshData,
}) => {
  return (
    <Paper
      sx={{
        p: "40px",
        borderRadius: "16px",
        backgroundColor: "#000000",
        "&.MuiPaper-root": {
          boxShadow: "none",
          padding: "0px",
          backgroundColor: "#000000",
          backgroundImage: "none",
        },
      }}
    >
      <TableContainer
        className="HideScrollbar"
        sx={{
          overflowY: "scroll",
          overflowX: "scroll",
          bgcolor: "#141414 !important",
          borderRadius: "16px",
          maxHeight: `calc(${SECTION_MIN_HEIGHT} - ${"0px"})`,
          minHeight: `calc(${SECTION_MIN_HEIGHT} - ${"0px"})`,
        }}
      >
        <Box
          sx={{
            paddingRight: "24px",
          }}
        >
          {head}
        </Box>
        <Table
          stickyHeader
          sx={{
            padding: "0px 40px",
            "&.MuiTable-root": {
              paddingRight: "40px",
            },
            position: "relative",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.06) !important",
                boxShadow: "none !important",
                "&.MuiTableRow-root": {
                  backgroundColor: "#141414",
                },
                display: "flex",
                flexDirection: "row",
                minWidth: "900px",
                width: "100%",
                paddingRight: "80px",
                marginTop: "40px",
                // marginBottom: "16px",
                gap: "36px",
              }}
            >
              {columns?.map((column: any, index: number) => {
                return (
                  <TableCell
                    sx={{
                      bgcolor: "#141414 !important",
                      color: "rgba(255, 255, 255, 0.5)",
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                      flex: 1,
                    }}
                    key={column?.id}
                    style={{
                      paddingLeft: "16px",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "left",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        height: "100% !important",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <Box
                        onClick={() => {}}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          gap: "10px",
                          height: "100% !important",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            width: "fit-content",
                            fontWeight: "500",
                            height: "100% !important",
                          }}
                        >
                          {column.label}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                );
              })}
              <TableCell
                sx={{
                  bgcolor: "#141414 !important",
                  color: "rgba(255, 255, 255, 0.5)",
                  "&.MuiTableCell-root": {
                    borderBottom: "none",
                  },
                  flex: 1,
                }}
                style={{
                  // width: "auto",
                  // minWidth: "125px",
                  padding: "16px",
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        width: "fit-content",
                        fontWeight: "500",
                      }}
                    >
                      Actions
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 0,
                left: 0,
                bottom: 0,
                top: 120,
                height: "100%",
              }}
            >
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                  marginRight: "12px",
                }}
              />
            </Box>
          ) : (
            <TableBody
              sx={{
                display: "flex",
                flexDirection: "column",
                // gap: "16px",
              }}
            >
              {rows
                ?.sort((a: any, b: any) => {})
                .map((row: any) => {
                  return (
                    <>
                      <Row
                        key={row?.id}
                        row={row}
                        handleRefreshData={handleRefreshData}
                      />
                      {/* <Box sx={{width:"100%",height:"1px",borderBottom:"1px solid rgba(255, 255, 255, 0.06)"}}></Box> */}
                    </>
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LayoutTable;
