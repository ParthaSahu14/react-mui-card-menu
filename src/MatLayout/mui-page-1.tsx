import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Container, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import pageLayout from "../json/page1.json";
import useMediaQuery from '@mui/material/useMediaQuery';

interface IRenderChildrenProps {
  data: any;
}

// export default function SkeletonTypography() {
//   return (
//     <Grid container>
//       <Grid item>
//           <Typography variant="h1"><Skeleton /></Typography>
//           <Typography variant="h3"><Skeleton /></Typography>
//           <Typography variant="body1"><Skeleton /></Typography>
//       </Grid>
//     </Grid>
//   );
// }

const RenderChildren: React.FC<IRenderChildrenProps> = ({ data }) => {
  const nestedChildren = (data.children || []).map((children: any, i: number) => {
    return <Grid key={`grid-child-${i}`} {...children.props}>
      <RenderChildren data={children} />
    </Grid>
  })

  

  const Item = React.lazy(() => {
    return Promise.all([
      import("./Item"),
      new Promise(resolve => setTimeout(resolve, 10000))
    ])
    .then(([moduleExports]) => moduleExports);
  });

  return (
    <>
      {data.text && data.props.item && !data.props.container ? (
        <React.Suspense fallback={
          <Stack  sx={{ height: "300px", minWidth: "300px"}}>
            <Typography variant="h3"><Skeleton /></Typography>
            {/* <Skeleton variant="text" height={20}/> */}
            {/* <Skeleton variant="circular" width={40} height={40} /> */}
            <Skeleton variant="rectangular" height={'100%'}/>
          </Stack>
        }>
          <Item text={data.text} />
        </React.Suspense>
      ) : ''}
      {nestedChildren}
    </>
  );
}

const page = pageLayout;

export default function RowAndColumnSpacing() {
  const theme = useTheme();
  const [currentLayout, setCurrentLayout] = React.useState<any>(undefined);
  const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.only('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.only('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.only('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.only('xl'));

  const currentBreakPoint = matchesLG ? 'LG' :
    matchesXL ? 'XL' :
      //matchesMD ? 'MD' :
      //matchesSM ? 'SM' :
      matchesXS ? 'XS' : null;

  React.useEffect(() => {
    console.log('right now currentBreakPoint :: ' + currentBreakPoint);
    if (currentBreakPoint !== null) {
      const CurrentBreakPointLayout = page.layouts[currentBreakPoint];
      setCurrentLayout(CurrentBreakPointLayout);
    }
  }, [currentBreakPoint]);



  return (
    <>
      {!currentBreakPoint && !currentLayout ? <div>Loading...</div> :
        (currentBreakPoint && currentLayout) ?
          (
            <>
              <CssBaseline />
              <Container  sx={{ bgcolor: "transparent" }}>
                {currentLayout.type ? (

                  <Grid {...currentLayout.props}>
                    {currentLayout.children.map((child: any, i: number) => {
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
          )
          : ''}
      {`currentBreakPoint :: ${currentBreakPoint}`}
    </>
  );
}


// {page.layouts.type ? (

//   <Grid {...page.layouts.props}>
//     {page.layouts.children.map((child, i) => {
//       return (
//         <Grid key={i} {...child.props}>
//           <RenderChildren data={child} />
//         </Grid>
//       );
//     })}
//   </Grid>

// ) : ''}

{/* <Grid container rowSpacing={3}>
          <Grid item lg={12} style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "flex-start",
            height: "320px",
            overflowX: "auto",
            overflowY: "hidden"
          }}>
            <Grid
              item
              container
              rowSpacing={0}
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
              //spacing={3}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignContent: "flex-start",
                height: "320px",
                overflowX: "auto",
                overflowY: "hidden"
              }}
            >
              <Grid item lg={6}>
                <Item>
                  <h1>MI</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  <h1>TL</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  <h1>PL</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  <h1>TS</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                  <h1>new line</h1>
                </Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid item container lg={12}>
              <Grid item lg={12}>
                <div style={{ backgroundColor: 'lightgreen',minHeight: 300 }}>Carousel</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
