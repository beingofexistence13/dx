import React from 'react';
import Link from 'next/link';

const Component = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </li>
    <li>
      <Link href="/blog/hello-world">
        <a>Blog Post</a>
      </Link>
    </li>
  </ul>
);

export default {
  component: Component,
};

export const Default = {};
