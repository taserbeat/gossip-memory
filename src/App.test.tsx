import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe("renders texts correctly.", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("header title is exist.", () => {
    expect(screen.getByText(/Gossip Memory/i)).toBeInTheDocument();
  });

  it("footer credit is exist.", () => {
    expect(screen.getByText(/created by taserbeat 2021/i)).toBeInTheDocument();
  });
});
