import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import FoolishChoiceBox from './FoolishChoiceBox';

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
        <FoolishChoiceBox />
      </Provider>
    );

    expect(asFragment).toMatchSnapshot();
  });
});
