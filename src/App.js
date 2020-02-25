import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { Container, UserContainer, Avatar, UserInfo, UserRepos, Name, Item, Repo, Bio, Location, RepoDescription, RepoIcons } from './styles';
import SearchBar from "./components/SearchBar";

import { FaGithub, FaUsers, FaDatabase, FaStar, FaCodeBranch } from 'react-icons/fa';

import api from './services/api';

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  };

  async function loadUser(param) {
    try {
      setLoading(true);
      const response = await api.get(`/users/${param}`);

      if (response.data) {
        await loadRepos(response.data);
        setUser(response.data);

        setLoading(false);
      }
    } catch (e) {
      alert('Erro ao buscar usuário');
      setLoading(false);
    }
  }

  async function loadRepos({ repos_url }) {
    try {
      const response = await api.get(`${repos_url}?sort=pushed`);

      if (response.data) {
        setRepos(response.data.slice(0, 4));
      }
    } catch (e) {
      alert('Erro ao carregar repositorios');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <SearchBar onSearch={loadUser} />
        {loading && <h3>Carregando...</h3>}
        {user && (
          <UserContainer>
            <UserInfo>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <Avatar src={user.avatar_url} />
              </a>

              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
              <Location>{user.location}</Location>
              <Item>
                <FaGithub />
                {user.login}
              </Item>
              <Item>
                <FaUsers />
                {user.followers} followers
              </Item>

              <Item>
                <FaDatabase />
                {user.public_repos} repositories
              </Item>
            </UserInfo>
            <UserRepos>
              {repos.map(repo => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Repo>

                    <RepoDescription>
                      <Name>{repo.name}</Name>
                      <p>{repo.description || 'No description'}</p>
                    </RepoDescription>
                    <RepoIcons>
                      <span>{repo.forks}</span>
                      <FaCodeBranch />
                      <span>{repo.stargazers_count}</span>
                      <FaStar />
                    </RepoIcons>
                  </Repo>
                </a>
              ))}
            </UserRepos>
          </UserContainer>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;