import React, { useState, useMemo } from 'react';
import { List, ListItem, ListItemSecondaryAction, Menu, MenuItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { selectWayOfTheHeros, selectFoolishChoices } from '../memorySlice';
import { FoolishChoice, FoolishChoiceHint } from '../../../types/memory';

import { useDispatch, useSelector } from 'react-redux';
import { addFoolishChoice, removeFoolishChoice } from '../memorySlice';
import { hintAll } from './WayOfTheHeroBox';

interface FoolishChoiceBoxProps {

}

const FoolishChoiceBox = (props: FoolishChoiceBoxProps) => {
  const foolishChoices = useSelector(selectFoolishChoices);
  const wayOfTheHeros = useSelector(selectWayOfTheHeros);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /** 選択可能なFoolishChoiceのリスト */
  const foolishChoiceTable = useMemo(() => {
    return hintAll.filter(
      hint => !foolishChoices.some(fc => fc.hint === hint)
    ).filter(
      hint => !wayOfTheHeros.some(woth => woth.hint === hint)
    );
  }, [foolishChoices, wayOfTheHeros]);

  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleListItemClick = (value: FoolishChoiceHint) => {
    const addedHint: FoolishChoice = {
      hint: value,
    };
    dispatch(addFoolishChoice(addedHint));
    setAnchorEl(null);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleDeleteClick = (value: FoolishChoice) => {
    dispatch(removeFoolishChoice(value));
  }

  return (
    <div className="simple-box fc-box">
      <p className="box-title">Foolish Choice</p>
      <List className="simple-list woth-list">
        {
          foolishChoices.map((foolishChoice, i) => {
            return (
              <ListItem
                className="simple-listitem woth-listitem"
                key={`fc-hint$${i}`}
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <p className="hint">{foolishChoice.hint}</p>
                <ListItemSecondaryAction>
                  <IconButton onClick={(event) => handleDeleteClick(foolishChoice)}>
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
            foolishChoiceTable.map((hint, i) => (
              <MenuItem key={`fc-select$${i}`} onClick={(event) => handleListItemClick(hint)}>
                {hint}
              </MenuItem>
            ))
          }
        </Menu>
      </List>
    </div>
  )
}

export default FoolishChoiceBox;
