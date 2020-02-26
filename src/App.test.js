import React from 'react';
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import * as API from './Api';
import { resolve } from 'dns';
import expectExport from 'expect';

configure({adapter: new Adapter()});

describe('<App>', ()=>{
  const randomImagePath =
    "https://en.wikipedia.org/wiki/Devil_May_Cry_3:_Dante%27s_Awakening#/media/File:Devil_May_Cry_3_boxshot.jpg";

  const dummyPokemon = {
    sprites:{
      front_default: randomImagePath
    }
  };
  const getPokemonSpy = jest.spyOn(API, 'getPokmon').mockImplementation(()=>new Promise(resolve=>resolve(dummyPokemon)));
  it('should call getPokemon after entering a pokemon name',()=>{
    const wrapper  = mount(<App />);
    wrapper.find('input').simulate('change', {target:{value: 'pikachu'}});
    wrapper.find('button').simulate('click');
    expect(getPokemonSpy).toHaveBeenCallWidth('pickachu')
  });

})