import React, { useState } from 'react';

import { Container, Input } from './styles';

import { MdSearch } from 'react-icons/md';

export default function SearchBar({ onSearch }) {
    const [search, setSearch] = useState('');

    function handleSearch() {
        onSearch(search);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <Container>
            <Input placeholder="Username" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
            <MdSearch onClick={handleSearch} style={{ marginLeft: 10, cursor: 'pointer' }} size={35} />
        </Container>
    );
}
