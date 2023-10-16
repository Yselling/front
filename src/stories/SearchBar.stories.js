import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchBar from '../components/atoms/SearchBar';
import '../index.css';

export default {
    title: 'Atoms/SearchBar',
    component: SearchBar,
};

const onSearch = action('onSearch');

export const ClassicSearchBar = () => (
    <SearchBar onSearch={onSearch} />
);
