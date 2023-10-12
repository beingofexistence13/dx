import React from 'react';

type PropTypes = { a?: string; b: string };

export const ArgTypesParameters = ({ a = 'a', b }: PropTypes) => <div>Example story</div>;
