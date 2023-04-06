import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

import { WrapperSearchBar } from './SearchBar.styled';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { useRecipes } from 'api/hooks';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const { data, isLoading } = useRecipes(searchParams);
  console.log(data);

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuery(value);
  };

  const handleSubmit = e => {
    // console.log(query);
    e.preventDefault();
    setSearchParams({ title: query });
    setQuery(query);
  };

  const handleTypeChange = ({ value }) => {
    const newArr = { [value]: query, [value]: query };
    console.log(newArr);

    setSearchParams(newArr);
  };

  return (
    <WrapperSearchBar>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
      <div style={{ display: 'flex' }}>
        <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
        <SearchTypeSelector onChange={handleTypeChange} />
      </div>
      {isLoading && <div>Loading...</div>}
      {data && <SearchedRecipesList items={data} />}
    </WrapperSearchBar>
  );
};

// export const SearchBar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { data } = useRecipes(searchParams);
//   // console.log(data);

//   const search = searchParams.get('search');
//   // console.log(search);

//   // const type = searchParams.get('value');
//   // console.log(searchParams);

//   const updateSearch = search => {
//     // console.log(search);
//     setSearchParams(search !== '' ? { search } : {});
//   };

//   const handleTypeChange = ({ value }) => {
//     console.log(value);
//     if (value === 'title') {
//       setSearchParams({
//         [value]: search,
//       });
//     } else if (value === 'ingredient') {
//       setSearchParams({
//         [value]: search,
//       });
//     }

//     // setSearchParams({
//     //   [value]: search,
//     // });
//   };

//   return (
//     <WrapperSearchBar>
//       <SearchForm onSubmit={updateSearch} />
//       <div style={{ display: 'flex' }}>
//         <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
//         <SearchTypeSelector onChange={handleTypeChange} />
//       </div>
//       <SearchedRecipesList items={data} />
//     </WrapperSearchBar>
//   );
// };

// моя форма первоначальная
// export const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams({});
//   const { data } = useRecipes(searchParams);

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     setQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSearchParams({ search: query });
//   };

//   const handleTypeChange = ({ value }) => {
//     const firstParam = searchParams.get('search');
//     const newArr = { search: firstParam, [value]: firstParam };

//     setSearchParams(newArr);
//   };

//   return (
//     <WrapperSearchBar>
//       <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
//       <div style={{ display: 'flex' }}>
//         <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
//         <SearchTypeSelector onChange={handleTypeChange} />
//       </div>
//       <SearchedRecipesList items={data} />
//     </WrapperSearchBar>
//   );
// };
