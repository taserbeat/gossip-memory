import React, { useState } from 'react';
import { List, ListItem, ListItemSecondaryAction, Menu, MenuItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { selectWayOfTheHeros } from '../memorySlice';
import { WayOfTheHero, WayOfTheHeroHint } from '../../../types/memory';

import { useDispatch, useSelector } from 'react-redux';
import { addWayOfTheHero, removeWayOfTheHero } from '../memorySlice';

interface WayOfTheHeroBoxProps {

}

const wayOfTheHeroHintTable: WayOfTheHeroHint[] = [
  "Deku Tree",
  "Dodongo's Cavern",
  "Jabu Jabu",
  "Forest Temple",
  "Fire Temple",
  "Water Temple",
  "Spirit Temple",
  "Shadow Temple",
  "Bottom of the well",
  "Ice Cavern",
  "Gerudo Training Ground",
  "Ganon's Castle",
  "Hyrule Field",
  "Lost Wood",
  "Sacred Forest Meadow",
  "Death Mountain Trail",
  "Death Mountain Crater",
  "Zora's River",
  "Zora's Fountain",
  "Lake Hylia",
  "Hyrule Castle",
  "Gerudo Valley",
  "Gerudo's Fortress",
  "Haunted Wasteland",
  "Desert Colossus",
  "Graveyard",
  "Kokiri Forest",
  "Kakariko Village",
  "Zora's Domain",
  "Goron City",
  "Lon Lon Ranch",
];

const WayOfTheHeroBox = (props: WayOfTheHeroBoxProps) => {
  const wayOfTheHeros = useSelector(selectWayOfTheHeros);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleListItemClick = (value: WayOfTheHeroHint) => {
    const addedHint: WayOfTheHero = {
      hint: value,
    };
    dispatch(addWayOfTheHero(addedHint));
    setAnchorEl(null);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleDeleteClick = (value: WayOfTheHero) => {
    dispatch(removeWayOfTheHero(value));
  }

  return (
    <div className="simple-box woth-box">
      <p className="box-title">Way of the Hero</p>
      <List className="simple-list woth-list">
        {
          wayOfTheHeros.map(wayOfTheHero => {
            return (
              <ListItem className="simple-listitem woth-listitem">
                <p className="hint">{wayOfTheHero.hint}</p>
                <ListItemSecondaryAction>
                  <IconButton onClick={(event) => handleDeleteClick(wayOfTheHero)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
        <IconButton onClick={handleAddClick}>
          <AddIcon />
        </IconButton>

        {/* https://material-ui.com/ja/components/menus/ */}
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleMenuClose}>
          {
            wayOfTheHeroHintTable.map((woth) => (
              <MenuItem onClick={(event) => handleListItemClick(woth)}>
                {woth}
              </MenuItem>
            ))
          }
        </Menu>
      </List>
    </div>
  )
}

export default WayOfTheHeroBox;
