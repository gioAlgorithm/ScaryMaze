"use client"
import React from "react";
import styles from "./Cursor.module.scss"

const Cursor = ({ x, y }: any) => (
  <div className={styles.customCursor} style={{ left: x - 2, top: y - 2 }} />
);

export default Cursor;