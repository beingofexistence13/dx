"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment } from "../hooks/slices/userSlice";
import { AppDispatch, RootState } from "../hooks/store/store";
import { Landing, Navbar, Applebar, Bottombar, Sidebar, Obsidian } from "../src/components";
import "./page.css";
// import { Collapse, Text, Grid, Button } from "@nextui-org/react";
// import { NextUIProvider } from '@nextui-org/react';
import { Checkbox, Text, Spacer } from "@nextui-org/react";








export default function Home() {
  const userRef = useRef(false);
  const { entities, loading, value } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = React.useState([]);

  return (
    <div>

      <Landing />
      {/* <h1 className="text-red-500">Never give up!!!</h1> */}
      {/* <div className="element"></div>
      <h1 className="text">Text</h1>
      <input type="text" className="input" placeholder="Input" /> */}



      {/* <h1>04/03/2023 I will add Vscode + Obsidian ui combination in my hello website</h1> */}

    </div>
  );
}















{/* <h1 className="p-5">I am gonna make Hello app before 25February plus I will do my best in Study cause I have show them all?
        Today is 21-02-2023(Tuesday) Let's go man!!!
        I am very worried about the SSC exam.I am not sure about this exam cause other exams of this standerd has been very bad.But giving up is not my type of job.

        So,I am gonna try but this is very taught for me to do a good result in this SSC exam but consistency can full any kind of gap.And sure I need to focus on my studies very much.Let me start this journey by making a Roadmap or plan for every week before this exam.

        12:00 AM ------ okay will make it later!!!
      </h1> */}


{/* <Checkbox.Group
        label="My Todos"
        value={selected}
        onChange={setSelected}
      >
        <Checkbox value="buenos-aires">Higher Math Chapter(8,9)</Checkbox>
        <Checkbox value="auckland">English Grammer</Checkbox>
        <Checkbox value="sydney">Bangladesh and Agriculture Studies</Checkbox>
        <Checkbox value="islam">Islam and umm.. good studies</Checkbox>


        
      </Checkbox.Group> */}
{/* <Spacer y={1} /> */ }

{/* 
      <Grid.Container gap={2}>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Junior" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Jane" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      </Grid>
      <Grid>
        <Avatar 
          squared 
          text="Joe" />
      </Grid>
    </Grid.Container> */}
