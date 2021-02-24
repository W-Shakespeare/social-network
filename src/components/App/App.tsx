import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import {
  UsersContainer,
  ProfileContainer,
  LoginContainer,
  HeaderContainer,
  DialogsContainer,
  MessagesContainer,
} from "..";
import { Layout } from "antd";
import NavBarContainer from "../NavBar";
import PageError from "../PageError";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <HeaderContainer />
          <Layout>
            <NavBarContainer />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div className="main">
                  <Switch>
                    <Route exact path="/">
                      <DefaultPage />
                    </Route>
                    <Route path="/Profile/:id?">
                      <ProfileContainer />
                    </Route>
                    <Route exact path="/Users">
                      <UsersContainer />
                    </Route>
                    <Route path="/Login">
                      <LoginContainer />
                    </Route>
                    <Route path="/Dialogs">
                      <DialogsContainer />
                    </Route>
                    <Route path="/Messages/:id?">
                      <MessagesContainer />
                    </Route>
                    <Route path="/PageError">
                      <PageError />
                    </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
const DefaultPage = () => {
  return <div className="startPage">Select page</div>;
};
