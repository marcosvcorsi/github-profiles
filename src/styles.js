import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const UserContainer = styled.div`
    margin-top: 20px;
    display: flex;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

export const Name = styled.h3`
    margin-top: 10px;
`

export const Bio = styled.span`
    font-size: 12px;
    max-width: 200px;
    text-align: center;
    word-wrap: break-word;
`

export const Location = styled.span`
    font-size: 12px;
    margin-bottom: 15px;
`

export const Item = styled.div`
    padding: 5px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const UserRepos = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 630px;
    margin-left: 20px;

    a {
        text-decoration: none;
        color: inherit;
    }
`

export const Repo = styled.div`
    height: 150px;
    width: 300px;
    background-color: #FFF;
    color: #000;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: trasform 0.2s ease;

    :hover {
        transform: scale(1.01);
    }
`

export const RepoDescription = styled.div`
    text-decoration: inherit;
`
export const RepoIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    > * {
        margin-right: 5px;
    }
`

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 2px solid ${props => props.theme.colors.text};
    cursor: pointer;

    :hover {
        opacity: 0.75;
    }
`


