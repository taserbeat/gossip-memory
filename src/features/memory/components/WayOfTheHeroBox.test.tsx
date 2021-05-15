import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import WayOfTheHeroBox from './WayOfTheHeroBox';

describe("renders correctly", () => {
  // beforeEach(() => {
  //   render(
  //     <Provider store={store}>
  //       <WayOfTheHeroBox />
  //     </Provider>
  //   );
  // });

  it("match snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <WayOfTheHeroBox />
      </Provider>
    );

    expect(asFragment).toMatchSnapshot();
  });
});
