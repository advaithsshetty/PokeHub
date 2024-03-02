# Pokémon Thumbnail Component

This project contains a React component called `PokemonThumbnail`, which displays information about a Pokémon.

## Installation

To use the `PokemonThumbnail` component in your React project, you can follow these steps:

1. Install the component using npm or yarn:

   ```bash
   npm install pokemon-thumbnail
   ```

   or

   ```bash
   yarn add pokemon-thumbnail
   ```

2. Import the component into your React application:

   ```javascript
   import PokemonThumbnail from 'pokemon-thumbnail';
   ```

3. Use the component in your application as needed:

   ```javascript
   <PokemonThumbnail
     id={1}
     name="Bulbasaur"
     image="bulbasaur.png"
     type="Grass"
     height={0.7}
     weight={6.9}
     stat1="HP"
     stat2="Attack"
     stat3="Defense"
     stat4="Special Attack"
     stat5="Special Defense"
     stat6="Speed"
     bs1={45}
     bs2={49}
     bs3={49}
     bs4={65}
     bs5={65}
     bs6={45}
   />
   ```

## Props

The `PokemonThumbnail` component accepts the following props:

- `id`: The Pokémon's ID.
- `name`: The Pokémon's name.
- `image`: The URL or path to the Pokémon's image.
- `type`: The Pokémon's type.
- `height`: The Pokémon's height.
- `weight`: The Pokémon's weight.
- `stat1` to `stat6`: The names of the Pokémon's stats.
- `bs1` to `bs6`: The base stats of the Pokémon.

## Example

Here's an example of how to use the `PokemonThumbnail` component:

```javascript
import React from 'react';
import PokemonThumbnail from 'pokemon-thumbnail';

const App = () => {
  return (
    <div>
      <PokemonThumbnail
        id={1}
        name="Bulbasaur"
        image="bulbasaur.png"
        type="Grass"
        height={0.7}
        weight={6.9}
        stat1="HP"
        stat2="Attack"
        stat3="Defense"
        stat4="Special Attack"
        stat5="Special Defense"
        stat6="Speed"
        bs1={45}
        bs2={49}
        bs3={49}
        bs4={65}
        bs5={65}
        bs6={45}
      />
    </div>
  );
};

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

