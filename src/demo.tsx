import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomMenu } from './CustomMenu';

//https://codesandbox.io/s/ddzw3?file=/src/card.js:1600-1605

export default function RecipeReviewCard() {
  const onmenuItemClicked = (itemId: number, action: string) => {
    console.log('itemId', itemId);
    console.log('action', action);
  };

  return (
    <div style={{ maxWidth: 780 }}>
      {[1, 2, 3, 4, 5, 6].map((item, i) => {
        return (
          <Card
            sx={{
              maxWidth: 250,
              maxHeight: 260,
              display: 'inline-block',
              position: 'relative',
              margin: '5px 5px',
            }}
            key={`menuitem-${i}`}
          >
            <CardMedia
              component="img"
              height="194"
              image="https://media.istockphoto.com/photos/tropical-resort-picture-id536048545?k=20&m=536048545&s=612x612&w=0&h=tb_YEVpSL5DZCnrX7kPGswl8vHJNsx5bhykCBicBvh8="
              alt="Paella dish"
              style={{ maxHeight: 160 }}
            />

            <CustomMenu itemId={item} menuItemClicked={onmenuItemClicked} />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish - {item}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
