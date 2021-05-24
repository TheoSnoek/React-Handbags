import React, {Fragment} from 'react';
import './App.css';
import Button from './Button'
import Product from "./Product"
import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"
import Tile from "./Tile"
import Brand from "./assets/brand.png"
import Story from "./assets/our_story.png"

function App() {
  return (
      <Fragment>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              title={"to the collection"}
          />
          <Button
              title={"shop all bags"}
          />
          <Button
              title={"pre-orders"}
              disabled={false}
          />
        </nav>
        <main>
          <Product
              promoText={"Best seller"}
              image={Bag1}
              name={"The handy bag"}
              price={"€400,-"}
          />
          <Product
              promoText={"Best seller"}
              image={Bag2}
              name={"The stylish bag"}
              price={"€250,-"}
          />
          <Product
              promoText={"New collection"}
              image={Bag3}
              name={"The simple bag"}
              price={"€300,-"}
          />
          <Product
              promoText={"New collection"}
              image={Bag4}
              name={"The trendy bag"}
              price={"€150,-"}
          />
        </main>
        <footer>
          <Tile
              title={"The Brand"}
              story={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          />
          <Tile
              image={Brand}
          />
          <Tile
              image={Story}
          />
          <Tile
              title={"Our Story"}
              story={"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          />
        </footer>
      </Fragment>
  );
}

export default App;
