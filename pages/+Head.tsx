// https://vike.dev/Head

import React from "react";
import logoUrl from "../assets/logo.svg";

import { ColorSchemeScript } from "@mantine/core";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <ColorSchemeScript />
      {/* See https://plausible.io/docs/plausible-script */}
      {/* TODO: update data-domain */}
      <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
    </>
  );
}
