import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import pageLayout from "../json/page2.json";

const page = pageLayout;

const Item = styled(Paper)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "lightgreen"
}));

interface IRenderChildrenProps {
  data: any;
}

const RenderChildren: React.FC<IRenderChildrenProps> = ({ data }) => {
  const nestedChildren = (data.children || []).map((children: any, i: number) => {
    return <Grid key={`grid-child-${i}`} {...children.props}>
      <RenderChildren data={children} />
    </Grid>
  })

  return (
    <>
      {data.text && data.props.item && !data.props.container ? (
        <Item>{data.text}</Item>
      ) : ''}
      {nestedChildren}
    </>
  );
}

export default function BasicGrid() {
  return (
    <>
      <CssBaseline />
      <Container fixed sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {page.layouts.type ? (

          <Grid {...page.layouts.props}>
            {page.layouts.children.map((child, i) => {
              return (
                <Grid key={i} {...child.props}>
                  <RenderChildren data={child} />
                </Grid>
              );
            })}
          </Grid>

        ) : ''}
      </Container>
    </>
  );
}

{/* <Grid container sm={12}>
          <Grid item sm={9}>
            <Grid
              container
              item
              sm={12}
              rowSpacing={3}
              columnSpacing={{ sm: 3, md: 3 }}
            >
              <Grid item sm={4}>
                <Item>RI</Item>
              </Grid>
              <Grid item sm={4}>
                <Item>SM</Item>
              </Grid>
              <Grid item sm={11.5} mt={2}>
                <Item style={{ height: "200px" }}>IA</Item>
              </Grid>
              <Grid item sm={11.5}>
                <Item style={{ height: "200px" }}>QS</Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={3}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={12}>
                <Item style={{ height: "200px" }}>LN</Item>
              </Grid>
              <Grid item sm={12}>
                <Item style={{ height: "200px" }}>AC</Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}