import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cardx({character}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={character ? character.image : ""}
          alt="green iguana"
         
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
     
          </Typography>

        {character? character.id : ""}
          <Typography gutterBottom variant="h5" component="div">
           {character? character.name :""}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          {character? character.homeworld : ""}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          {character? character.gender : ""}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          {character? character.species : ""}
          </Typography>



        </CardContent>
      </CardActionArea>
    </Card>
  );
}
