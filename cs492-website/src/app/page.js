'use client'
import Image from "next/image";
import styles from "./page.module.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab, TabList, TabPanel, TabContext } from '@mui/material/Tab';
import Box from '@mui/material'
import styles2 from './styling.css'

import SelectTabs from "./tab-selection";
export default function Home() {
  return (
    <SelectTabs className='full-size'></SelectTabs>
  );
}
