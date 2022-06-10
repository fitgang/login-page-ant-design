import React from "react"
import { PrimaryButton, SecondaryButton } from "./Button";
import "./css/Actions.css";

export default function Actions() {
  return (
    <>
      <PrimaryButton text="Start Free Trial"/>
      <SecondaryButton text="login"/>
    </>
  )
}