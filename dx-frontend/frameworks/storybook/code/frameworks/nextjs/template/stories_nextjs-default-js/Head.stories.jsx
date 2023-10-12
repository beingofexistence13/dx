/* eslint-disable no-undef */
import { expect } from '@storybook/jest';
import Head from 'next/head';
import React from 'react';
import { within, userEvent, waitFor } from '@storybook/testing-library';

function Component() {
  return (
    <div>
      <Head>
        <title>Next.js Head Title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}

export default {
  component: Component,
};

export const Default = {
  play: async ({ canvasElement }) => {
    await waitFor(() => expect(document.title).toEqual('Next.js Head Title'));
    await expect(document.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);
    await expect(document.querySelector('meta[property="og:title"]').content).toEqual(
      'My new title'
    );
  },
};
