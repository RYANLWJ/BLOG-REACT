
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header'

const useStyles = makeStyles({
  card: {
    maxWidth: 750,
  },
});
export const Home = () => {
  const classes = useStyles();
  return (
    <Header></Header>
  )
}
